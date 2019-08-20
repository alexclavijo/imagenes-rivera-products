using System.ComponentModel.DataAnnotations;

namespace ImagenesRivera.Products.Models
{
    public class PayerDetails
    {
        [Required]
        public string PayerID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
    }
}