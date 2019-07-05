using ImagenesRivera.Products.Models;
using ImagenesRivera.Products.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ImagenesRivera.Products.Api.Controllers
{
    [Route("api/orders")]
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
        /// <param name="order"></param>
        [HttpPost]
        public void Post([FromBody] OrderDetails order)
        {
            try
            {
               // _orderService.ProcessOrder(order);
            }
            catch {

            }
        }

       
    }
}