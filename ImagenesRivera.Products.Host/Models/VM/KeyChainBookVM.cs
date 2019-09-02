using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Models
{
    public class Page {

        public int Index { get; set; }
        public string Photo1 { get; set; }
        public string Photo2 { get; set; }
        public bool IsFullPage => Photo2 == null;
    }

    public class KeyChainBookVM
    {
        public string Skin { get; set; }
        public List<Page> Pages;

        public KeyChainBookVM() {
            Pages = new List<Page>();
        }
    }
}
