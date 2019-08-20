using System.Collections.Generic;

namespace ImagenesRivera.Products.Data.Entities
{
    public class KeyChainBook : Product
    {
        public string FolderName { get; set; }
        public string Title { get; set; }
        public string Skin { get; set; }
        public List<KeyChainBookPage> Pages { get; set; }
    }

    
}
