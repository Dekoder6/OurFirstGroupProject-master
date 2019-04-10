var vr = new Vue({
  el: '#app',
  data() {
    return {
      headers: [
        { text: 'ID', value: 'ID' },
        { text: 'Category', value: 'Category' },
        { text: 'Comment', value: 'Comment' },
        { text: 'Status', value: 'Status' },
      ],
      rows: [],  
      ID: 1,
      Category: '',
      Comment: '',
      Status: ''
    }
  },
  mounted: function () {
    getDataFromList()
  },
  methods: {
    openDialog: function () {
      var dialogOptions = {
        url: _spPageContextInfo.webServerRelativeUrl + 'Lists/FeedBookList/NewForm.aspx?isdlg=1',
        title: 'Title of the Dialog',
        allowMaximize: false,
        showClose: true,
        width: 700,
        height: 550,
        dialogReturnValueCallback: function (dialogResult) {
          getDataFromList();
        }
      }
      SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', dialogOptions)
    },
  }
})

function getDataFromList() {
  var endpointUrl = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/getList('" + _spPageContextInfo.webServerRelativeUrl +
    "Lists/FeedBookList')/items?$expand=FeedBookCategory,FeedBookStatus&$select=ID,FeedBookComments,FeedBookCategory/Title,FeedBookStatus/Title";
  $.ajax({
    url: endpointUrl,
    type: "GET",
    headers: {
      "accept": "application/json;odata=verbose",
      "app-type": "application/json;odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val()
    },
    success: function (data) {
      console.log(data.d.results);

      var rows = [];
      $.each(data.d.results, function (key, value) {
        rows.push({
          "ID": value.ID,
          "Category": value.FeedBookCategory.Title,
          "Comment": value.FeedBookComments,
          "Status": value.FeedBookStatus.Title,
        });
      });

      console.log(rows);
      vr.total = data.d.results.length;
      vr.rows = rows;
      return data.d.results;
    },
    error: function (err) {
      console.log(JSON.stringify(err));
    }
  })
};

var availWidth = $('#dragdealer').outerWidth();
new Dragdealer('panel', {
  horizontal: false,
  vertical: true,
  xPrecision: availWidth,
  animationCallback: function(x, y) {
    $('#dragdealer').css('margin-top', y * availWidth);
  }
});

$("#showHideContent").click(function hide() {
  $(this).unbind('click');
  if ($("#app").is(":hidden")) {
    $("#app").removeClass("d-none");
    $("#app").addClass("d-block ");
    $("#app").animate({
      right: -100
    }, 100, function () {
      $(".fa").removeClass(" fa-chevron-left");
      $(".fa").addClass("  fa-chevron-right ");
      $('#showHideContent').bind('click', hide);
    });
  } else {
    $("#app").animate({
      right: -650
    }, 100, function () {
      $("#app").removeClass("d-block");
      $("#app").addClass("d-none");
      $(".fa").removeClass(" fa-chevron-right");
      $(".fa").addClass(" fa-chevron-left ");
      $('#showHideContent').bind('click', hide);
    });
  }
  return false;
})
