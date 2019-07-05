using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ImagenesRivera.Products.Api.Controllers
{
    [Route("api/images")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        /// <summary>
        /// Uploads an image returning a temporary code to be retrieved later on
        /// </summary>
        /// <param name="imageBase64">Image in base 64 format</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<string> Post([FromBody] string imageBase64)
        {
            return Ok("xxxx-1234");
        }
    }
}