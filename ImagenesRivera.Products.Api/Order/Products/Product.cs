using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Api.Order
{
    public class Product
    {
        public string Name { get; set; }
        public string Description { get; set; }        
        public string Price { get; set; }
        public string Sku { get; set; }
        public string Tax { get; set; }
        public object Data { get; set; }
    }
}
