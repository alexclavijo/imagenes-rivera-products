using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Models
{
    public class KeyChainBook : Product
    {
        public string Title { get; set; }
        public string Skin { get; set; }
        public List<Page> Pages { get; set; }
    }

    public class Page {
        public int Index { get; set; }
        public string CustomText { get; set; }
        public string ImageBase64 { get; set; }
    }
}
