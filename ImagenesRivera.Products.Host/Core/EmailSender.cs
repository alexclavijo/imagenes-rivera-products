using Microsoft.Extensions.Configuration;
using RazorLight;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Core
{

    public class EmailSender
    {
        private readonly IConfiguration _config;

        public EmailSender(IConfiguration configuration)
        {
            _config = configuration;
        }

        public async Task SendAsync(EmailData emailData)
        {
            SmtpClient client = new SmtpClient("mysmtpserver");
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("username", "password");

            MailMessage mailMessage = new MailMessage();
            mailMessage.IsBodyHtml = true;
            mailMessage.From = new MailAddress("whoever@me.com");
            mailMessage.To.Add("receiver@me.com");
            mailMessage.Subject = "subject";
            mailMessage.Body = GenerateBodyHtml(emailData.RazorViewName, emailData.RazorViewModel);
            await client.SendMailAsync(mailMessage);
        }

        private string GenerateBodyHtml(string viewName, object model)
        {
            IRazorLightEngine _razor = EngineFactory.CreatePhysical($@"{Directory.GetCurrentDirectory()}\Views\Email");
            return _razor.Parse($"{viewName}.cshtml", model);
        }
    }
}
