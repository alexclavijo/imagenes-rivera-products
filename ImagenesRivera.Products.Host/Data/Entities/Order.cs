using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Data.Entities
{
    public enum OrderStatus { APPROVED, SAVED, CREATED, VOIDED, COMPLETED }

    public class Order : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string OrderID { get; set; }
        [Required]
        public OrderStatus Status { get; set; }
        public int ShippingId { get; set; }
        public Shipping Shipping { get; set; }

        public int PayerId { get; set; }
        public Payer Payer { get; set; }
        public List<ProductOrders> Products { get; set; }


    }
}
