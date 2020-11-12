const scriptURL = 'https://script.google.com/macros/s/AKfycbwqy4AtMwM-cEfQjmYsJz0SOSXxYdjg4-M5CLV_X2glDFkVbeO2/exec'
const form = document.forms['google-sheet']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks! You have successfully submitted your lead ..."))
    .catch(error => console.error('Error!', error.message))
    
})









