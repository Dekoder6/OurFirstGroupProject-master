using Microsoft.SharePoint;
using Microsoft.SharePoint.Utilities;
using Microsoft.SharePoint.WebPartPages;
using System;
using System.Web;

namespace OutFirstGroupProject.List.FeedBookList
{
    public partial class NewItemPage : WebPartPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            using (SPSite site = SPContext.Current.Site)
            {
                using (SPWeb web = site.OpenWeb())
                {
                }
            }

        }
    }
}
