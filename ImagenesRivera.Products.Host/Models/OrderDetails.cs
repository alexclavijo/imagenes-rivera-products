using ImagenesRivera.Products.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Models
{
    public class OrderDetails
    {
        private readonly Order _order;
        public string OrderID => _order.OrderID;
        public OrderStatus OrderStatus => _order.Status;
        public DateTime Date => _order.CreatedOn.Value;
        public string ClientName => _order.Payer.Name;
        public string ClientEmail => _order.Payer.Email;
        public string ClientPhone => _order.Payer.Phone;
        public string ShippingAddress => _order.Shipping.Address.ToString();
        public ShippingStatus ShippingStatus => _order.Shipping.ShippingStatus;

        public OrderDetails() {}

        public OrderDetails(Order order)
        {
            _order = order;
        }
    }
}
