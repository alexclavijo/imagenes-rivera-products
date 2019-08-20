using ImagenesRivera.Products.Data.Entities;
using ImagenesRivera.Products.Models;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ImagenesRivera.Products.Host.Models
{
    public class OrderCreate
    {
        [Required]
        public string OrderID { get; set; }
        [Required]
        public OrderStatus Status { get; set; }
        [Required]
        public PayerDetails Payer { get; set; }
        [Required]
        public ShippingDetails Shipping { get; set; }
        [Required]
        public List<ProductDetails> Products { get; set; }

        public List<Product> MapProducts() {
            var result = new List<Product>();
            Products.ForEach(p =>
            {
                dynamic productData = JsonConvert.DeserializeObject<dynamic>(p.ProductJsonData);
                switch (p.ProductType) {
                    case "KeyChainBook": result.Add(new KeyChainBook
                    {
                        FolderName = productData.FolderName,
                        Name = productData.Name,
                        Description = productData.Description,
                        Title = productData.Title,
                        Pages = productData.Pages,
                        Skin = productData.Skin,
                        Price = productData.Price,
                        Tax = productData.Tax
                    }); break;
                }
            });
            return result;
        }

        public Order MapOrder() {
            return new Order
            {
                OrderID = OrderID,
                Status = Status,

                Payer = new Payer
                {
                    PayerID = Payer.PayerID,
                    Name = Payer.Name,
                    Email = Payer.Email,
                    Phone = Payer.Phone,
                    Address = new Address
                    {
                        Address1 = Payer.Address1,
                        Address2 = Payer.Address2,
                        City = Payer.City,
                        ZipCode = Payer.ZipCode
                    }
                },

                Shipping = new Shipping
                {
                    Name = Shipping.Name,
                    Address = new Address
                    {
                        Address1 = Shipping.Address1,
                        Address2 = Shipping.Address2,
                        City = Shipping.City,
                        ZipCode = Shipping.ZipCode
                    }
                }
            };
        }
      
    }
}
