// Contact form send data to google spreadsheets

// thats the google script url from the deployment
const scriptURL = 'https://script.google.com/macros/s/AKfycbxrFzYOwsf_EVt609XR8NFgHD0Jk4fw-JVpja_ttKxBEmr3Ip5Jr3VbAolh6bXVvTg/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { display_thankyou_message(response) })
    .catch(error => console.log('Sorry, something went wrong. Please try again', error.message))
})

function display_thankyou_message(response) {
  $('.thankyou_message').css('display', 'block');
  $('.gform').css('display', 'none');
  console.log(response);
};
