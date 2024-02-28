document.querySelector('.handleclick').addEventListener( 'click' , Apiresponse )
window.addEventListener( 'load', Apiresponse )

function Apiresponse( responsedata ){

  const Apiurl = `https://quote-garden.onrender.com/api/v3/quotes/random`

  fetch( Apiurl )
  .then(( response ) => { return response.json() })
  .then(( responsedata ) => { 
      document.querySelector('.quotediv').innerHTML = responsedata.data[0].quoteText
   })
}