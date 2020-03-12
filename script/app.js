'use strict'

//Array that will hold all store locations for easier reference
var storeList = [];
//Number of hours each store is open
var hoursOpen = 14;
//Array of strings for each hour the store is open that will be used to write onto the table cells 
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//This constructor function will create a template from which I can make any number of store locations by creating an instance for each desired store

function NewStore(name, minCustomer, maxCustomer, avgCookies) {

  //Properties for objects to be created, defined when creating object instance
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  
  //This is all of my store sales metrics stored in an object
  var hourlyData = this.salesData();

  this.customersPerHour = hourlyData.customerData;
  this.totalCustomersServed = hourlyData.customerTotals;
  this.cookiesPerHour = hourlyData.cookieData;
  this.totalCookiesSold = hourlyData.cookieTotals;

  //Pushes each store to a global array for easy reference
  storeList.push(this);
}

//Calculates hourly and total customers and hourly and total sales and store them in an array
NewStore.prototype.salesData = function() {

  // var totals = this.randomCustomer();
  var hourlyCustomers = [];
  var hourlyCookies = [];
  var customerSum = 0;
  var cookieSum = 0;

  for (var i = 0; i < hoursOpen; i++) {
    //customers served per hour
    var customersPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    hourlyCustomers.push(customersPerHour);
    //cookies sold per hour
    var cookiesPerHour = Math.floor(customersPerHour * this.avgCookies);
    hourlyCookies.push(cookiesPerHour);
    //total customers
    customerSum = customerSum + customersPerHour;
    //total cookies
    cookieSum = cookieSum + cookiesPerHour;
    
  }
  return {
    customerData: hourlyCustomers,
    customerTotals: customerSum,
    cookieData: hourlyCookies,
    cookieTotals: cookieSum
  }
}

NewStore.prototype.createTable = function() {




}

//These are the instances for each individual store created from the constructor function
var seattleStore = new NewStore('Seattle', 23, 65, 6.3);
var tokyoStore = new NewStore('Tokyo', 3, 24, 1.2);
var dubaiStore = new NewStore('Dubai', 11, 38, 3.7);
var parisStore = new NewStore('Paris', 20, 38, 2.3);
var limaStore = new NewStore('Lima', 2, 16, 4.6);

console.log(storeList);

//Writes sales data to a list for each location   ***needs to be changed where it creates a table***
// NewStore.prototype.write = function() {

//   var salesTable = document.getElementsById('sales-table');
//   var rowEl = document.createElement('tr');
//   var cellEl = document.createElement('td');
    

//   //Will write table rows
//   for (var i = 0; i < this.totalCookies.length; i++) {
//     var hourEl = document.createElement('li');
//     salesList.appendChild(hourEl);
//     hourEl.textContent = this.totalCookies[i];

//     //will write table cells
//        for () {
   
//        }
//      }

//     var sumEl = document.createElement('li');
//     sumEl.textContent = 'total : ' + this.cookieSum;
//     salesList.appendChild(sumEl);

//  }
// }

