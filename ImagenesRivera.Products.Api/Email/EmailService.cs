using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Api.Email
{
    public interface IEmailService {
        Task SendAsync(EmailData emailData);
    }

    public class EmailService : IEmailService
    {
        public async Task SendAsync(EmailData emailData) {
            SmtpClient client = new SmtpClient("mysmtpserver");
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("username", "password");

            MailMessage mailMessage = new MailMessage();
            mailMessage.IsBodyHtml = true;
            mailMessage.From = new MailAddress("whoever@me.com");
            mailMessage.To.Add("receiver@me.com");
            mailMessage.Body = "body";
            mailMessage.Subject = "subject";
            await client.SendMailAsync(mailMessage);
        }
    }
}
