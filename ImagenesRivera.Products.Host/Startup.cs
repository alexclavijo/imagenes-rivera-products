using ImagenesRivera.Products.Core;
using ImagenesRivera.Products.Data.Entities;
using ImagenesRivera.Products.Data.Repository;
using ImagenesRivera.Products.Services;
using jsreport.AspNetCore;
using jsreport.Binary;
using jsreport.Local;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace ImagenesRivera.Products.Host
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            //EF
            services.AddDbContext<DataContext>(opts => opts.UseSqlServer(Configuration.GetConnectionString("WinHostDBOrders")));

            //Email Sending
            services.AddSingleton<EmailSender>();

            //Global Repository
            services.AddScoped(typeof(IGlobalRepository<>), typeof(GlobalRepository<>));

            // Services
            services.AddSingleton<INotificationService, NotificationService>();
            services.AddSingleton<IOrderService, OrderService>();

            //MVC
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            //Reporting
            services.AddJsReport(new LocalReporting()
                    .UseBinary(JsReportBinary.GetBinary())
                    .AsUtility()
                    .Create());

            //Razor Engine
            services.Configure<RazorViewEngineOptions>(engineOptions =>
            {
                engineOptions.ViewLocationFormats.Add("/Views/SPAs/{0}.cshtml");
                engineOptions.ViewLocationFormats.Add("/Views/SPAs/Shared/{0}.cshtml");
                engineOptions.ViewLocationFormats.Add("/Views/Pages/{0}.cshtml");
                engineOptions.ViewLocationFormats.Add("/Views/Reports/{0}.cshtml");
            });

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Imagenes Rivera Products Api", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                  name: "keychain",
                  template: "keychain",
                  defaults: new { controller = "KeyChain", action = "RenderSpa" });

                routes.MapRoute(
                    name: "default",
                    template: "{controller=KeyChain}/{action=Index}");
            });

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Imagenes Rivera Products Api");
                c.RoutePrefix = "api";
            });


        }
    }
}
