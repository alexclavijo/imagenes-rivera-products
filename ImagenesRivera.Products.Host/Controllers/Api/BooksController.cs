using ImagenesRivera.Products.Host.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;

namespace ImagenesRivera.Products.Api.Controllers
{
    [Route("api/books")]
    [Produces("application/json")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IHostingEnvironment _env;
        private string UploadFolderPath => $"{_env.WebRootPath}/uploads/books";

        public BooksController(IHostingEnvironment env) {
            _env = env;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="bookCreate"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<string> Post([FromBody] BookCreate bookCreate)
        {
            string bookId = DateTime.Now.Ticks.ToString();
            string bookFolderName = $"{bookCreate.Title}-{bookCreate.PagesNumber}-{bookId}";
            var directory = Directory.CreateDirectory($"{UploadFolderPath}/{bookFolderName}");
            if (!directory.Exists)
                return StatusCode(500, "Internal server error creating directory");

            return Ok(bookFolderName);
        }

        /// <summary>
        ///  Temporarly saves page image and returns a local path to be referenced later
        /// </summary>
        /// <param name="bookFolderName"></param>
        /// <param name="pageSave"></param>
        /// <returns></returns>
        [HttpPut("{bookFolderName}/page")]
        public ActionResult<(int index, string photoPath)> Put(string bookFolderName, [FromForm] BookPageImageSave pageSave)
        {
            var filePath = $"{UploadFolderPath}/{bookFolderName}/{pageSave.File.FileName}";
            using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write))
            {
                pageSave.File.OpenReadStream().CopyTo(fileStream);
            }
            return Ok(new { index = pageSave.Index, photoPath = filePath });
        }
    }
}