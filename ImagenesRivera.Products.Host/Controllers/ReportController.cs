using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImagenesRivera.Products.Data.Entities;
using ImagenesRivera.Products.Services;
using jsreport.AspNetCore;
using jsreport.Types;
using Microsoft.AspNetCore.Mvc;

namespace ImagenesRivera.Products.Host.Controllers
{
    [Route("reports")]
    public class ReportController : Controller
    {

        private readonly IOrderService _orderService;

        public ReportController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [Route("orders/{orderId}")]
        [HttpGet]
        [MiddlewareFilter(typeof(JsReportPipeline))]
        public IActionResult OrderInvoice(string orderId)
        {
            var order = _orderService.Get(orderId);
            if (order == null)
                return BadRequest("Invalid Order");

            HttpContext.JsReportFeature().Recipe(Recipe.ChromePdf);
            return View();
        }

        [Route("orders/{orderId}/keychain-page")]
        [HttpGet]
        //[MiddlewareFilter(typeof(JsReportPipeline))]
        public IActionResult KeyChainPhotosPage(string orderId)
        {
            var order = _orderService.Get(orderId);
            if (order == null)
                return BadRequest("Invalid Order");

            HttpContext.JsReportFeature().Recipe(Recipe.ChromePdf);
            return View();
        }
    }
}
