using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Host.Models
{
    public class BookPageImageCreate
    {       
        public int Index { get; set; }
        public IFormFile File { get; set; }
    }
}
