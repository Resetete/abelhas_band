$('.contact1-form').on('submit',function(e){
    //optional validation code here
    e.preventDefault();
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbxlh7r_fxS9MesYsSOWRNA4h7-7n2sqJYNYhLd3t-8aUJhOnWAQgrYuOedepO-mrgo/exec",
        method: "POST",
        dataType: "json",
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
