using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Api.Order
{
    public enum OrderStatus { APPROVED, SAVED, CREATED, VOIDED, COMPLETED }

    public class OrderDetails
    {
        public string OrderID { get; set; }        
        public Payer Payer { get; set; }
        public OrderStatus Status { get; set; }
        public Shipping ShippingUpdate { get; set; }             
        public Shipping Shipping => ShippingUpdate ?? new Shipping { Name = Payer.Name, Address = Payer.Address };
        public List<Product> Products { get; set; }

    }
}
