'use strict'

// function randomCustomerHour(min, max) {
//   return Math.floor(Math.random) * (max - min);
// }

// Object #1 for Seattle store
var storeSeattle = {

  name: 'Seattle' ,
  minCustomer: 23 ,
  maxCustomer: 65 ,
  avgCookies: 6.3 ,
  hoursOpen: 14 ,
  
  //This method gives a random number for customers per hour.
  randomCustomer: function() {

      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  } ,
  //This method multiples the customers per hour by the average cookie sales.
  cookieSales: function() {

      return Math.floor(this.randomCustomer() * this.avgCookies);
  } ,
  //This method stores the customers per hour and cookies per hour and stores them in an array. That array is looped through 14 times and returns an array with 14 dual values, one pair for each hour open.
  salesArray: function() {
      
      var totalArray = [];

      for (index = 0; i < this.hoursOpen; i++) {
          
      }

      return totalArray;
      // console.log(totalArray)
  },
}


// Object #2 for Tokyo store
var storeTokyo = {
  name: 'Tokyo' ,
  minHourlyCustomer: 3 ,
  maxHourlyCustomer: 24 ,
  avgCookiesHour: 1.2 ,

}

// Object #3 for Dubai store
var storeDubai = {
  name: 'Dubai' ,
  minHourlyCustomer: 11 ,
  maxHourlyCustomer: 38 ,
  avgCookiesHour: 3.7 ,

}

// Object #4 for Paris store
var storeParis = {
  name: 'Paris' ,
  minHourlyCustomer: 20 ,
  maxHourlyCustomer: 38 ,
  avgCookiesHour: 2.3 ,

}

// Object #5 for Lima store
var storeLima = {
  name: 'Lima' ,
  minHourlyCustomer: 2 ,
  maxHourlyCustomer: 16 ,
  avgCookiesHour: 4.6 ,

}