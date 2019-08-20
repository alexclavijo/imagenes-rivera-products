using ImagenesRivera.Products.Data.Entities;
using System.ComponentModel.DataAnnotations;

namespace ImagenesRivera.Products.Models
{
    public class ShippingDetails
    {
        public string Name { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
    }
}