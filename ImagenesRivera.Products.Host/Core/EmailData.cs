using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Core
{
    public class EmailData
    {
        public string From { get; set; }
        public List<string> To { get; set; }
        public string Subject { get; set; }
        public string RazorViewName { get; set; }
        public object RazorViewModel { get; set; }
    }
}
