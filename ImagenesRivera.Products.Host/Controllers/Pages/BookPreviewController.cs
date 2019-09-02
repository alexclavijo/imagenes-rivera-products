using ImagenesRivera.Products.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using System.IO;
using System.Linq;

namespace ImagenesRivera.Products.Host.Controllers.Pages
{
    [Route("book/preview")]
    public class BookPreviewController : Controller
    {
        private readonly IHostingEnvironment _env;
        private string UploadFolderPath => $"{_env.WebRootPath}/uploads/books";

        public BookPreviewController(IHostingEnvironment env) {
            _env = env;
        }

        [HttpGet("{bookFolderName}")]
        public IActionResult BookPreview(string bookFolderName, string skin = null) {

            var vm = new KeyChainBookVM { Skin = skin };

            var bookFolder = new DirectoryInfo($"{UploadFolderPath}/{bookFolderName}");

            var files = bookFolder.GetFiles("page*.jpeg").ToList();
            files.Sort(delegate (FileInfo x, FileInfo y) {
                int pageX = int.Parse(Path.GetFileNameWithoutExtension(x.FullName).Replace("page", string.Empty));
                int pageY = int.Parse(Path.GetFileNameWithoutExtension(y.FullName).Replace("page", string.Empty));
                return pageX.CompareTo(pageY);
            });

            string folderRelativePath = $"/uploads/books/{bookFolderName}";
            int pos = 0;
            while (pos < files.Count)
            {
                var fileOdd = files[pos];
                var page = new Page { Index = pos + 1 };
                using (Bitmap bitmapOdd = new Bitmap(fileOdd.OpenRead())) {
                    
                    page.Photo1 = $"{folderRelativePath}/{fileOdd.Name}";
                    page.Photo2 = null;

                    if (bitmapOdd.Width == bitmapOdd.Height)
                    {
                        var fileEven = files[pos + 1];
                        page.Photo2 = $"{folderRelativePath}/{fileEven.Name}";
                        pos += 2;
                    }
                    else {
                        pos++;
                    }
                }
                vm.Pages.Add(page);
            }

            return View(vm);
        }

        
    }
}
