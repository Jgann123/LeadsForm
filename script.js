const scriptURL = 'https://script.google.com/macros/s/AKfycbwqy4AtMwM-cEfQjmYsJz0SOSXxYdjg4-M5CLV_X2glDFkVbeO2/exec'
const form = document.forms['google-sheet']
//const scriptURL2 = 'https://script.google.com/macros/s/AKfycbx_vvpE4LJDQ1P__e-fmHl46QOJKR1DXja6l8UMgiEGlzgN8EcT/exec'

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks! You have successfully submitted your lead ..."))
    .catch(error => console.error('Error!', error.message))
    
})

// var droDownList = document.getElementById('list');


// function sortList(dropDownList) {
//   if (droDownList == "Bev Smith Kia’s Reprocessed Car Sale & Trade In Event") {
//     return
//     form.addEventListener('submit', i => {
//       i.preventDefault()
//       fetch(scriptURL2, { method: 'POST', body: new FormData(form)})
//         .then(response => alert("Thanks! You have successfully submitted your lead ..."))
//         .catch(error => console.error('Error!', error.message))
        
//     })
//   }
// }

// sortList();









