using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ImagenesRivera.Products.Data.Entities
{
    public enum ShippingStatus {
        Pending = 0,
        Shipped = 1,
        WrongAddress = 2
    }

    public class Shipping : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }        
        public string Name { get; set; }
        public Address Address { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public ShippingStatus ShippingStatus { get; set; }
    }
}