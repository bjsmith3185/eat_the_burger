
$( document ).ready(function() {

    $(".eat-burger").on("click", function(event) {
      var id = $(this).attr("data-id");

      $.ajax("/burger/update/" + id, {
        type: "POST"
      }).then(
        function() {
          location.reload();
        }
      );
    });

    $("#submit").on("click", function(event) {
      event.preventDefault();
      var input = $("#added-burger").val().trim();
      var name = {
        name : input
      }

      var url = "/burger/add";
      $.ajax({ url: url, 
        type:"POST",
        data: name
      }).then(
        function(){
          location.reload();
        })
    })


    $(".delete-burger").on("click", function(event) {
      console.log("-------------")
      var name = $(this).attr("data-name");
      console.log("this is name: "+name);

      var url = "/burger/delete";
      $.ajax({ url: url, 
        type:"POST",
        data: name
      }).then(
        function(){
          location.reload();
        })
    })

  });
  