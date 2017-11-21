var itemTemplate = _.template('<li class="list-group-item d-flex justify-content-between align-items-center"><%= name %> <span class="badge badge-primary badge-pill"><%= age %></span> </li>')

$(document).ready(function() {
  $.ajax({
    url: 'http://192.168.99.100:3000',
    type: "GET",
    crossDomain: true,
    dataType: "json",
    success: function (response) {
        var item = response.attendance.map((item) =>{
          return itemTemplate(item);
        });
        $('[js-target="host"]').append(response.host);
        $('[js-target="attendance-list"]').append(item);
    }
  });
});
