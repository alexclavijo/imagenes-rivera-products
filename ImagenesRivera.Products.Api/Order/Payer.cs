namespace ImagenesRivera.Products.Api.Order
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