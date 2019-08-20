using ImagenesRivera.Products.Models;
using ImagenesRivera.Products.Services;
using jsreport.AspNetCore;
using jsreport.Types;
using Microsoft.AspNetCore.Mvc;

namespace ImagenesRivera.Products.Api.Controllers
{
    [Route("api/reports")]
    public class ReportsController : Controller
    {

        private readonly IOrderService _orderService;

        public ReportsController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [Route("/api/orders/{orderId}/invoice")]
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

        [Route("/api/orders/{orderId}/keychain/photos-page")]
        [HttpGet]
        [MiddlewareFilter(typeof(JsReportPipeline))]
        public IActionResult KeyChainPhotosPage(string orderId)
        {
            var order = _orderService.Get(orderId);
            if (order == null)
                return BadRequest("Invalid Order");

            HttpContext.JsReportFeature().Recipe(Recipe.ChromePdf);
            return View(new KeyChainBookVM());
        }
    }
}
