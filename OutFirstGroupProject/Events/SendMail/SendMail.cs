using Microsoft.SharePoint;
using Microsoft.SharePoint.Administration;
using Microsoft.SharePoint.Utilities;
using System;
using System.Collections.Specialized;
using System.Net;
using System.Net.Mail;

namespace OutFirstGroupProject.Events.SendMail
{
    /// <summary>
    /// List Item Events
    /// </summary>
    public class SendMail : SPItemEventReceiver
    {
        /// <summary>
        /// An item is being added.
        /// </summary>
        public override void ItemAdded(SPItemEventProperties properties)
        {
            base.ItemAdded(properties);
            EventFiringEnabled = false;
            try
            {
                SPWebApplication webApp = SPWebApplication.Lookup(new Uri("http://d005:666/"));
                SPListItem thisItem = properties.ListItem;

                int IDFeedBack = Convert.ToInt32(thisItem["ID"]);
                string Usersubject = Convert.ToString(thisItem["FeedBookEmail"]);

                //Get Status by LookUp 
                SPList listStatus = properties.Web.Lists["ListStatus"];
                SPListItem listStatusItem = listStatus.GetItemById(1);
                thisItem["FeedBookStatus"] = new SPFieldLookupValue(listStatusItem.ID, "Title");
                thisItem.Update();
                

                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("admin@tauquadra.com");
                mail.To.Add(Usersubject);
                mail.Subject = "Taurus Quadra.LTD";
                var text1 = "Уважаемый  " + Usersubject + "\r\n";
                var text2 = " Ваше сообщение по номеру:  " + IDFeedBack + "\r\n";
                var text3 = " Принял статус:  " + Convert.ToString(listStatusItem["Title"]) + "\r\n";
                var text4 = " С уважением Taurus Quadra";
                mail.Body = text1 + text2 + text3 + text4;

                // SmtpClient class sends the email by using the specified SMTP server
                SmtpClient smtp = new SmtpClient(webApp.OutboundMailServiceInstance.Server.Address);
                smtp.UseDefaultCredentials = true;
                smtp.Send(mail);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            EventFiringEnabled = true;
        }
        /// <summary>
        /// An item is being updated.
        /// </summary>
        public override void ItemUpdated(SPItemEventProperties properties)
        {
            base.ItemUpdated(properties);
            EventFiringEnabled = false;
            try
            {
                SPWebApplication webApp = SPWebApplication.Lookup(new Uri("http://d005:666/"));
                SPListItem thisItem = properties.ListItem;
                //Set email user and ID
                string Usersubject = Convert.ToString(thisItem["FeedBookEmail"]);
                int IDFeedBack = Convert.ToInt32(thisItem["ID"]);
                string UserStatus = Convert.ToString(thisItem["FeedBookStatus"]);

                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("admin@tauquadra.com");
                mail.To.Add(Usersubject);
                mail.Subject = "Taurus Quadra.LTD";
                var text1 = "Уважаемый  " + Usersubject + "\r\n";
                var text2 = " Ваше сообщение по номеру:  " + IDFeedBack + "\r\n";
                var text3 = " Принял статус:  " + UserStatus + "\r\n";
                var text4 = " С уважением Taurus Quadra";
                mail.Body = text1 + text2 + text3 + text4;

                // SmtpClient class sends the email by using the specified SMTP server
                SmtpClient smtp = new SmtpClient(webApp.OutboundMailServiceInstance.Server.Address);
                smtp.UseDefaultCredentials = true;
                smtp.Send(mail);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            EventFiringEnabled = true;
        }
    }
}