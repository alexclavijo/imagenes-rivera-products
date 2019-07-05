
using ImagenesRivera.Products.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Services
{
    public interface IOrderService
    {
       bool ProcessOrder(OrderDetails order);
    }

    public class OrderService : IOrderService
    {
        private readonly IEmailService _emailService;

        public OrderService(IEmailService emailService) {
            _emailService = emailService;
        }

        public bool ProcessOrder(OrderDetails order)
        {
            switch (order.Status)
            {
                case OrderStatus.COMPLETED:
                    ProcessOrderCompleted(order);
                    break;
                case OrderStatus.APPROVED:
                    ProcessOrderApproved(order);
                    break;
                case OrderStatus.CREATED:
                    ProcessOrderCreated(order);
                    break;
                case OrderStatus.SAVED:
                    ProcessOrderSaved(order);
                    break;
                case OrderStatus.VOIDED:
                    ProcessOrderVoided(order);
                    break;
            }
            return false;
        }

        private bool ProcessOrderCompleted(OrderDetails order)
        {
            order.Products.ForEach(p =>
            {
                if (p.Data is KeyChainBook)
                {
                    KeyChainBook book = p.Data as KeyChainBook;
                    PackKeyChainBook(book);
                }
            });
            return false;
        }

        private bool ProcessOrderApproved(OrderDetails order)
        {          
            return false;
        }

        private bool ProcessOrderCreated(OrderDetails order)
        {
            return false;
        }

        private bool ProcessOrderSaved(OrderDetails order)
        {
            return false;
        }

        private bool ProcessOrderVoided(OrderDetails order)
        {
            return false;
        }

        private bool PackKeyChainBook(KeyChainBook book)
        {
            
            return false;
        } 
    }
}
