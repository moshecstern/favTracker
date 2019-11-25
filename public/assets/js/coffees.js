// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-drank").on("click", function (event) {
    event.preventDefault()
    var id = $(this).data("id");
    var newDrank = $(this).data("newcoffee");
    if (newDrank) {
      newDrank = false
    } else {
      newDrank = true;
    }
    var newDrankState = {
      drank: newDrank 
    }
    console.log("ID: " + id + " and " + newDrank);
    console.log(newDrankState)
    // Send the PUT request.
    $.ajax("/api/coffee/" + id, {
      type: "PUT",
      data: newDrankState
    }).then(
      function () {
        console.log("changed drank to", newDrankState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".updaterating").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // var id = $(this).data("id");
    var id = $("[name=id]").val().trim();
    var updatedRating = {
      // rating: $(this).data("rating")
      // rating: $("#updaterating [name=rating]").val()
      rating: $("#new-rating-real").val()
    };
    console.log(updatedRating);
    // Send the PUT request.
    $.ajax("/api/rating/" + id, {
      type: "PUT",
      data: updatedRating
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCoffee = {
      name: $("#name").val().trim(),
      company: $("#company").val().trim(),
      drank: $("[name=drank]:checked").val().trim(),
      type: $("#type").val().trim(),
      rating: $("#rating").val().trim() || 1,
      caffeinated: $("[name=caffeinated]:checked").val().trim(),
    };
    console.log(newCoffee);

    // Send the POST request.
    $.ajax("/api/coffee", {
      type: "POST",
      data: newCoffee
    }).then(
      function () {
        console.log("created new Coffee");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".deleteCoffee").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
    $.ajax("/api/coffee/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted Coffee");
        // Reload the page to get the updated list
        location.reload();
      }
    )
  })




}); // end of functionality
