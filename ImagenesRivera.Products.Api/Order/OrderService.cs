using ImagenesRivera.Products.Api.Email;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Api.Order
{
    public interface IOrderService
    {
       bool CreateOrder(OrderDetails order);
    }

    public class OrderService : IOrderService
    {
        private readonly IEmailService _emailService;

        public OrderService(IEmailService emailService) {
            _emailService = emailService;
        }

        public bool CreateOrder(OrderDetails order)
        {
            order.Products.ForEach(p =>
            {
                if (p.Data is KeyChainBook) {

                }
            });

            return false;
        }
    }
}
