
using ImagenesRivera.Products.Data.Entities;
using ImagenesRivera.Products.Data.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Services
{
    public interface IOrderService
    {
        bool Process(Order order);
        Order Get(string orderId);
        List<Order> GetOrders();
    }

    public class OrderService : IOrderService
    {
        private readonly INotificationService _notificationService;
        private readonly IGlobalRepository<Order> _ordersRepository;

        public OrderService(IGlobalRepository<Order> ordersRepository, INotificationService notificationService) {
            _ordersRepository = ordersRepository;
            _notificationService = notificationService;
        }

        public bool Process(Order order)
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

        private bool ProcessOrderCompleted(Order order)
        {
            //order.Products.ForEach(p =>
            //{
            //    if (p.Data is KeyChainBook)
            //    {
            //        KeyChainBook book = p.Data as KeyChainBook;
            //        PackKeyChainBook(book);
            //    }
            //});
            return false;
        }

        private bool ProcessOrderApproved(Order order)
        {          
            return false;
        }

        private bool ProcessOrderCreated(Order order)
        {
            return false;
        }

        private bool ProcessOrderSaved(Order order)
        {
            return false;
        }

        private bool ProcessOrderVoided(Order order)
        {
            return false;
        }

        private bool PackKeyChainBook(KeyChainBook book)
        {
            
            return false;
        }

        public List<Order> GetOrders()
        {
            return _ordersRepository.Entity.Include(O => O.Payer)
                                           .Include(O => O.Shipping)
                                           .Include(O => O.Products)
                                           .OrderBy(O => O.CreatedOn)
                                           .ToList();
        }

        public Order Get(string orderId)
        {
            return _ordersRepository.Entity.Include(O => O.Payer)
                                           .Include(O => O.Shipping)
                                           .Include(O => O.Products)
                                           .SingleOrDefault(O => O.OrderID == orderId);
        }
        
    }
}
