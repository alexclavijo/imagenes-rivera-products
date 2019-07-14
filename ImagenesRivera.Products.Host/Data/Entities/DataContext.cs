using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Data.Entities
{
    // Migration Commands: https://www.entityframeworktutorial.net/efcore/pmc-commands-for-ef-core-migration.aspx
    public class DataContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }
        public DbSet<Payer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            SetupSoftDeletedEntities(modelBuilder);
            SetupEnitiesMapping(modelBuilder);
            base.OnModelCreating(modelBuilder);
        }

        protected  void SetupEnitiesMapping(ModelBuilder modelBuilder)
        {
            //Hierarchy Inheritance
            modelBuilder.Entity<KeyChainBook>(entity => {
                //Many to One
                entity.HasMany(b => b.Pages)
                      .WithOne(p => p.KeyChainBook)
                      .IsRequired();
            });

            modelBuilder.Entity<KeyChainBookPage>(entity =>
            {
                //One to Many
                entity.HasOne(p  => p.KeyChainBook)
                      .WithMany(b => b.Pages)
                      .HasForeignKey(p => p.KeyChainBookId);
            });

            modelBuilder.Entity<Payer>(entity =>
            {
                //Many to One
                entity.HasMany(p => p.Orders)
                      .WithOne(o => o.Payer)                      
                      .IsRequired();

                entity.OwnsOne(p => p.Address);
            });
            
            modelBuilder.Entity<Order>(entity =>
            {
                //One to One Mapping
                entity.HasOne(o => o.Shipping)
                      .WithOne(s => s.Order)
                      .HasForeignKey<Shipping>(s => s.OrderId);

                //One to Many
                entity.HasOne(o => o.Payer)
                      .WithMany(p => p.Orders)
                      .HasForeignKey(o => o.PayerId);
            });

            //Many to Many Mapping
            modelBuilder.Entity<ProductOrders>(entity =>
            {
                entity.HasKey(po => new { po.ProductId, po.OrderId });
                entity.HasOne(po => po.Product)
                      .WithMany(p => p.Orders)
                      .HasForeignKey(po => po.ProductId);
                entity.HasOne(po => po.Order)
                      .WithMany(o => o.Products)
                      .HasForeignKey(po => po.OrderId);
            });

            modelBuilder.Entity<Shipping>(entity => {
                entity.OwnsOne(s => s.Address);
            });
        }

        private void SetupSoftDeletedEntities(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasQueryFilter(x => x.IsDeleted.HasValue && !x.IsDeleted.Value);
            modelBuilder.Entity<Payer>().HasQueryFilter(x => x.IsDeleted.HasValue && !x.IsDeleted.Value);
            modelBuilder.Entity<Shipping>().HasQueryFilter(x => x.IsDeleted.HasValue && !x.IsDeleted.Value);
            modelBuilder.Entity<Order>().HasQueryFilter(x => x.IsDeleted.HasValue && !x.IsDeleted.Value);
        }

       
    }
}
