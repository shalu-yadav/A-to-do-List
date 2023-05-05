var index = 0;

$(document).ready(function () {
  // Add new note
  $("#add-note-btn").click(function () {
    index++;
    $(".note-list").append(
      '<div class="add-note" id="div' +
        index +
        '">' +
        '<div class="input-group cont-add-note">' +
        '<input type="text" class="form-control" placeholder="" id="ip' +
        index +
        '"/>' +
        '<input class="form-check-input check-box" type="checkbox" value="" style="margin-left: 0.5rem;" id="check' +
        index +
        ' "/>' +
        '<button class="btn btn-outline-primary del-note" style="margin-left: 0.5rem;" id=' +
        index +
        " ' " +
        "/>" +
        '<i class="fa-solid fa-trash"></i>' +
        "</button>" +
        "</div>" +
        "</div>"
    );
  });

  //del note
  $(".note-list").on("click", ".del-note", function () {
    var id = this.id;
    $("#div" + id).remove();
  });

  //done note
  $(".note-list").on("click", ".check-box", function () {
    var id = this.id;
    var newid = id.slice(5);
    var checkBox = document.getElementById(id);
    if (checkBox.checked == true) {
      $("#ip" + newid).css("text-decoration", "line-through");
      $("#ip" + newid).css("opacity", "0.5");
    } else {
      $("#ip" + newid).css("opacity", "1");
      $("#ip" + newid).css("text-decoration", "none");
    }
  });

});
