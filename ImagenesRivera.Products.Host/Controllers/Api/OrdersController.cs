using ImagenesRivera.Products.Host.Models;
using ImagenesRivera.Products.Models;
using ImagenesRivera.Products.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ImagenesRivera.Products.Api.Controllers
{
    [Route("api/orders")]
    [Produces("application/json")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService) {
            _orderService = orderService;
        }

        /// <summary>
        /// Returns all the orders as of today
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<IEnumerable<OrderDetails>> Get()
        {
            var orders = _orderService.GetOrders();
            return Ok();
        }

        /// <summary>
        /// Processes an order based on client request after Paypal response 
        /// </summary>
        /// <param name="orderCreate"></param>
        [HttpPost]
        public ActionResult Post([FromBody] OrderCreate orderCreate)
        {
            try
            {
               _orderService.Process(orderCreate.MapOrder(), orderCreate.MapProducts());

                return Ok();
            }
            catch {
                return BadRequest();
            }
        }
    }
}