
    //FIRST FUNCTION
    async function mycoins() {
        var url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  
        //var firstCall = await fetch(url)
        //var secondCall = await firstCall.json()
  
        //console.log(secondCall)
      }
  
      //SECOND FUNCTION
      printCoins()
      async function printCoins() {
  
        var url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  
        var firstCall = await fetch(url)
        var secondCall = await firstCall.json()
        var myTable = `<table class="table" > 
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Market Cap</th>
                  <th>24H</th>
                </tr>
              </thead>
              <tbody>`
  
        for (var i = 0; i < secondCall.length; i++) {
          var coinName = secondCall[i].id
          var coinImg = `<img src=' ${secondCall[i].image}' width='25px' class='mr-2' >` 
          var coinPrice = secondCall[i].current_price
          var coinMarketCap = secondCall[i].market_cap
          var coinPriceChange = secondCall[i].price_change_percentage_24h
  
          if (coinPriceChange < 0) {
            var color = "red"
          } else {
            var color = "green"
          }
  
          myTable += `<tr>
                  <th>`+ coinImg + coinName + `</th>
                  <th>`+ coinPrice + `</th>
                  <th>`+ coinMarketCap + `</th>
                  <th><span style='color:`+ color + `'>` + coinPriceChange + ` % </span></th>
                </tr>`
  
        }
        myTable += "</tbody> </table>"
        document.getElementById('step').innerHTML = myTable
      }
  
      // API for Exchange page  https://api.coingecko.com/api/v3/exchanges
  
      myExchanges()
      async function myExchanges() {
        var urlExchange = "https://api.coingecko.com/api/v3/exchanges"
  
        var firstCall = await fetch(urlExchange)
        var secondCall = await firstCall.json()
  
        console.log(secondCall)
  
        var myTable2 = `<table class="table" > 
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Established</th>
                  <th>  Url</th>
                </tr>
              </thead>
              <tbody>`
  
        for (var i = 0; i < secondCall.length; i++) {
          var exchangeName = secondCall[i].name
          var exchangeCountry = secondCall[i].country
          var exchangeEstablished = secondCall[i].year_established
          var exchangeUrl = secondCall[i].url
          
          myTable2 += `<tr>
                  <th>`+ exchangeName + `</th>
                  <th>`+ exchangeCountry + `</th>
                  <th>`+ exchangeEstablished + `</th>
                  <th><a href="`+ exchangeUrl+ `" target="_blank">`+exchangeUrl+`</a> </th>
                </tr>`
  
        }
        myTable2 += "</tbody> </table>"
        document.getElementById('exchange-table').innerHTML = myTable2
        
      }
  