using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }

        public DbSet<OrderDetails> Orders { get; set; }
        public DbSet<Payer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
