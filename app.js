1; // create a currency converter app that takes
//in the amount and currency and converts it to naira

alert("welcome to your currency converter");

function currencyConverter() {
  var currencyType = prompt("What currency do you want to convert?");

  var amount = prompt("How much do you want to convert?");

  if (currencyType == "USD") {
    alert(amount * 700 + " " + "Naira");
  } else if (currencyType == "GBP") {
    alert(amount * 800 + " " + "Naira");
  } else if (currencyType == "EUR") {
    alert(amount * 750 + " " + "Naira");
  } else {
    alert(amount + " " + currencyType);
  }
}

currencyConverter();

2; // create a application that takes in the currency you want to change
// the currency you desire to get and the amount you desire to change,
// let the result be the amount of the deired currency with the currency code you want to change
// with the currency code concatinated after it.

function multiCurrencyConverter(){
    var currencyType = prompt("what currency do you want to change?")
    
    var amount = prompt("How much do you want to convert?")
    
    var currencyExchanged = prompt("what currency do you want to get?")
    
    if(currencyType == "EUR" && currencyExchanged == "USD"){
      alert(amount * 1.04 + " " + "USD");
    
    }else if(currencyType == "EUR" && currencyExchanged == "GBP"){
      alert(amount * 0.888 + " " + "GBP");
    
    }else if(currencyType == "USD" && currencyExchanged == "EUR"){
       alert(amount * 0.96 + " " + "EUR");
    }else if(currencyType == "USD" && currencyExchanged == "GBP"){
       alert(amount * 0.85 + " " + "GBP");
    
    }else if(currencyType == "GBP" && currencyExchanged == "USD"){
      alert(amount * 1.8 + " " + "USD");

    }else if(currecyType == "GBP" && currencyExchange == "EUR"){
       alert(amount * 1.14 + " " + "EUR");
    
    }else{
    "How much in USD, GBP or EUR only"
      }
    }
    
    multicurrencyConverter();