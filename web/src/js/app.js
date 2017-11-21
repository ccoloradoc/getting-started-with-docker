var itemTemplate = _.template('<li class="list-group-item d-flex justify-content-between align-items-center"><%= name %> <span class="badge badge-primary badge-pill"><%= age %></span> </li>')
var items = [];

function renderItems(items) {
  var view = items.map((item) =>{
    return itemTemplate(item);
  });
  $('[js-target="attendance-list"]').html(view);
}

$(document).ready(function() {

  $('#submit').click(() => {
    $.ajax({
      url: 'http://192.168.99.100:3000',
      type: "POST",
      data: {
        name: $("#attendanceName").val(),
        age: $("#attendanceAge").val()
      },
      crossDomain: true,
      dataType: "json",
      success: function (response) {
        items.push(response.attendance);
        renderItems(items);
      }
    });

    return false;
  });

  $.ajax({
    url: 'http://192.168.99.100:3000',
    type: "GET",
    crossDomain: true,
    dataType: "json",
    success: function (response) {
        items = response.attendance;
        renderItems(items);
        $('[js-target="host"]').append(response.host);
    }
  });
});
