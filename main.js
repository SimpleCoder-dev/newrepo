console.log('Hello World!');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json ')
.then(res => res.json())
.then(data => {
  
  console.log(data);
  var name_eur = data.bpi.EUR.code;
  var price_rate_eur = data.bpi.EUR.rate;
  var name_usd = data.bpi.USD.code;
  var price_rate_usd = data.bpi.USD.rate;
  var name_gbp = data.bpi.GBP.code;
  var price_rate_gbp = data.bpi.GBP.rate;
  
  document.getElementById('rate-eur')
 .innerHTML = price_rate_eur;
  document.getElementById('name-eur')
 .innerHTML = name_eur;
  
  document.getElementById('rate-usd')
 .innerHTML = price_rate_usd;
  document.getElementById('name-usd')
 .innerHTML = name_usd;
 
  document.getElementById('rate-gbp')
 .innerHTML = price_rate_gbp;
  document.getElementById('name-gbp')
 .innerHTML = name_gbp;
 
}) 
