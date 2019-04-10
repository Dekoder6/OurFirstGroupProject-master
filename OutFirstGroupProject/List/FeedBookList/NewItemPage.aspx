<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Page Language="C#" CodeBehind="NewItemPage.aspx.cs" Inherits="OutFirstGroupProject.List.FeedBookList.NewItemPage" MasterPageFile="~masterurl/default.master" %>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div class="col-md-12">
        <asp:Label runat="server" AssociatedControlID="Category_lup" ID="Category_lbl" CssClass="form label" Text="<%$ Resources:vsProject, Category %>" />
        <SharePoint:LookupField ID="Category_lup" runat="server" FieldName="FeedBookCategory" ControlMode="New"></SharePoint:LookupField>
    </div>
    <div class="col-md-12">
        <asp:Label runat="server" ID="Comentary_lbl" AssociatedControlID="Add_comment" CssClass="control-label" Text="<%$ Resources:vsProject, Comentary %>" />
        <SharePoint:NoteField ID="Add_comment" runat="server" CssClass="form-control" FieldName="FeedBookComments" ControlMode="New"></SharePoint:NoteField>
    </div>
    <div class="col-md-12">
        <asp:Label AssociatedControlID="Email_txt" runat="server" ID="Email_lbl" CssClass="control-label" Text="<%$ Resources:vsProject, Email %>" />
        <SharePoint:TextField ID="Email_txt" CssClass="form input, form-control " runat="server" FieldName="FeedBookEmail" ControlMode="New"></SharePoint:TextField>
    </div>
    <div class="col-md-12">
        <asp:Label runat="server" CssClass="form label" Text="<%$ Resources:vsProject, AttachmentLabel %>" />
        <span dir="ltr">
            <input type="file" id="File_Upload" title="Name" runat="server" />
        </span>
    </div>
    <div class="col-md-12">
        <asp:Label ID="lblResult" a CssClass="form label; label" runat="server" Text=""></asp:Label>
    </div>
    <div class="col-md-12">
        <SharePoint:SaveButton ID="Save_btn" Text="<%$ Resources:vsProject, Save %>" CssClass="btn btn_add_req btn-primary" runat="server" ControlMode="New"></SharePoint:SaveButton>
    </div>
    <div class="m-0 d-flex  align-items-center justify-content-center ">
        <asp:Button ID="Cancel_btn" runat="server" CssClass="btn btn_add_req btn-primary" Text="<%$ Resources:vsProject, Cancel %>" OnClientClick="SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.Cancel);"></asp:Button>
    </div>

    <SharePoint:CssRegistration Name="/_layouts/15/OutFirstGroupProject/style/Backstyle.css" runat="server" After="corev15.css" />
</asp:Content>
