namespace ImagenesRivera.Products.Models
{
    public class Payer
    {
        public string PayerID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public Address Address { get; set; }      
    }
}