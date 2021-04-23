$('.contact1-form').on('submit',function(e){
    //optional validation code here
    e.preventDefault();
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwwCYxvnQ6BmaTZyUHPZsF4SFPpsSEa1ro7OgT5_WfDbWEQh-wXGobzrJvMB0t1VfQ/exec",
        method: "POST",
        dataType: "json",
        beforeSend: function(request) {
          request.setRequestHeader("User-Agent","resetete");
        },
        data: $(".contact1-form").serialize(),
        success: function(response) {

            if(response.result == "success") {
                $('.contact1-form')[0].reset();
                alert('Thank you for contacting us.');
                return true;
            }
            else {
                alert("Something went wrong. Please try again.")
            }
        },
        error: function() {

            alert("Something went wrong. Please try again.")
        }
    })
});
