using System.ComponentModel.DataAnnotations;

namespace ImagenesRivera.Products.Data.Entities
{
    public class Address
    {
        [Required]
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string ZipCode { get; set; }

        public override string ToString()
        {
            return $"{Address1} {Address2 ?? string.Empty} {City} {ZipCode}";
        }
    }
}