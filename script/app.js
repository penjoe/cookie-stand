'use strict'

// function randomCustomerHour(min, max) {
//   return Math.floor(Math.random) * (max - min);
// }

// Object #1 for Seattle store
var storeSeattle = {

  name: 'Seattle' ,
  minHourlyCustomer: 23 ,
  maxHourlyCustomer: 65 ,
  avgCookiesHour: 6.3 ,
  hoursOpenPerDay: 14 ,
  // cookiesAtEachHour: [],
  
  //This function calculates a random number for customers per hour then multiplies that by the average cookies per hour for a total cookies needed per hour and puts both of those values into an array.

  randomCustomerHour: function() {

    var customersPerHour = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
    var cookiesPerHour = Math.floor(customersPerHour * this.avgCookiesHour);
    var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour]
    // console.log(customersAndCookiesPerHour);
    return cookiesAndCustomersPerHour;
  } ,

  //This function will take customers per hour and cookies per hour from an array and repeat 14 times for hours open per day.

    salesTotalPerDay: function() {

      var customerCookieFinalSum = this.randomCustomerHour();
      var totalCookieIteration = 0;
      var totalCookie = [];
      var totalCustomerIteration = 0; 
      var totalCustomer = [];

        for (var i = 0; i < this.hoursOpenPerDay; i++) {
          
          totalCustomer.push(customerCookieFinalSum[0]);
          totalCustomerIteration = totalCustomerIteration + customerCookieFinalSum[0];
          totalCookie.push(customerCookieFinalSum[1]);
          totalCookieIteration = totalCookieIteration + customerCookieFinalSum[1];
          return [totalCustomer, totalCookie];

      }
    } ,
}

// console.log(storeSeattle.randomCustomerHour());
// console.log(customersAndCookiesPerHour)
console.log(storeSeattle.salesTotalPerDay());

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