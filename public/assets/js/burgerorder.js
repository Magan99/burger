$(function () {

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#name").val().trim(),
    };
    console.log(newBurger)

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eat").on("click", function (event) {
    var id = $(this).data("id");

    var ate = {
      eaten: 1
    };
    // console.log('id:' + id)
    // console.log('eaten:' + ate.eaten)
    console.log(this);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: ate
    }).then(
      function () {
        console.log("changed eaten state to", ate);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})