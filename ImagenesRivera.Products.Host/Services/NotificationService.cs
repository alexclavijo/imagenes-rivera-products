using ImagenesRivera.Products.Core;
using RazorLight;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ImagenesRivera.Products.Services
{

    public interface INotificationService
    {
        Task SendOrderCreatedNotification();
        Task SendOrderShippedNotification();
    }

    public class NotificationService : INotificationService
    {
        private readonly EmailSender _sender;

        public NotificationService(EmailSender sender)
        {
            _sender = sender;
        }

        public Task SendOrderCreatedNotification()
        {
            throw new NotImplementedException();
        }

        public Task SendOrderShippedNotification()
        {
            throw new NotImplementedException();
        }
    }
}
