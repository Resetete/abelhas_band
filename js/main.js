// Contact form send data to google spreadsheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbxtmW7XKfiNlHuQl1Oh5wmmtABrI8yj17mm3cEdLcfnXQpaiH7I-KZbN65yIBIUdh0/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { display_thankyou_message(response) })
    .catch(error => console.log('Sorry, something went wrong. Please try again', error.message))
})

function display_thankyou_message(response) {
  var test = $('.thankyou_message').css('display', 'block');
  console.log(response);
};
