$(document).ready(function () {
    // Hide error Text
    $("input[title='E-mail']", "textarea[title='Comments']").change(function () {
        $(this).next().hide();
    });
});

function PreSaveAction() {
    var comments = $("textarea[title='Comments']");
    var email = $("input[title='E-mail']");
    var category = $("select[title='Category']");

    var patern_email = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var patern_comments = /^[а-яА-я-a-zA-Z0-9]*$/;

    if (category.val() === "0") {
        var errcategory = '<div class="ms-formvalidation"><span role="alert">Attention, the <b>Category</b> field is not selected.</Span></div>';
        category.after(errcategory);
        category.focus();
        return false;
    }
    else if (!(patern_comments.test(comments.val())) || comments.val().length === 0) {
        var errcomments = '<div class="ms-formvalidation"><span role="alert">Attention, the <b>Comments</b> field is not valid.</Span></div>';
        comments.after(errcomments);
        comments.focus();
        return false;
    }
    else if (!(patern_email.test(email.val())) || email.val().length === 0) {
        var erremail = '<div class="ms-formvalidation"><span role="alert">Attention, the <b>E-mail</b> field is not valid.</Span></div>';
        email.after(erremail);
        email.focus();
        return false;
    }
    else {
        return true;
    }
}


