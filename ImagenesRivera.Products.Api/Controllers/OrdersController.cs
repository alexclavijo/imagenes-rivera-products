using ImagenesRivera.Products.Api.Order;
using Microsoft.AspNetCore.Mvc;

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

        // POST api/values
        [HttpPost]
        public void Post([FromBody] OrderDetails order)
        {
            try
            {
                _orderService.CreateOrder(order);
            }
            catch {

            }
        }
    }
}