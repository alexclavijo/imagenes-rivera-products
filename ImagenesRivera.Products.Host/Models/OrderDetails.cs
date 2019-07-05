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

        public OrderDetails() {}

        public OrderDetails(Order order)
        {
            _order = order;
        }
    }
}
