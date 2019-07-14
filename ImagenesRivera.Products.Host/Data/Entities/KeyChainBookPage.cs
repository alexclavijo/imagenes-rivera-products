using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Data.Entities
{
    public class KeyChainBookPage
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int Number { get; set; }
        public string Photo1 { get; set; }
        public string Photo2 { get; set; }
        public int KeyChainBookId { get; set; }
        public KeyChainBook KeyChainBook { get; set; }
    }
}
