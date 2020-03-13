'use strict'

//Array that will hold all store locations for easier reference
var storeList = [];

//Number of hours each store is open
var hoursOpen = 14;

//Array of strings for each hour the store is open that will be used to write onto the table header cells 
var hoursofOperation = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

//This constructor function will create a template from which I can make any number of store locations by creating an instance for each desired store

function NewStore(storeName, minCustomer, maxCustomer, avgCookies) {

  //Properties for objects to be created, defined when creating object instance
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  
  //This is all of my store sales metrics stored in an object
  var hourlyData = this.salesData();

  this.customersPerHour = hourlyData.customerData;        //customers per hour
  this.totalCustomersServed = hourlyData.customerTotals;  //customer sum
  this.cookiesPerHour = hourlyData.cookieData;            //cookies per hour
  this.totalCookiesSold = hourlyData.cookieTotals;        //cookie sum

  //Pushes each store to a global array for easy reference
  storeList.push(this);
  this.createTable();
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
    customerData: hourlyCustomers,  //customers per hour
    customerTotals: customerSum,    //customer sum
    cookieData: hourlyCookies,      //cookies per hour
    cookieTotals: cookieSum         //cookie sum
  }
}

//This method will create a table and populate it with the sales data for each store.
NewStore.prototype.createTable = function() {
  
  //Variable storing the table elements
  var tableEl = document.getElementById('sales-table');
  var rowEl = document.createElement('tr');
  var cellEl = document.createElement('td');
  cellEl.textContent = this.storeName;
  tableEl.appendChild(rowEl);
  rowEl.appendChild(cellEl);

  //This loops will create 14 cells per row
  for (var cookiesSold = 0 ;  cookiesSold < this.cookiesPerHour.length ; cookiesSold++) {

    cellEl = document.createElement('td');
    cellEl.textContent = this.cookiesPerHour[cookiesSold];
    rowEl.appendChild(cellEl);
  }

  //Adds daily totals to end column of table
  cellEl = document.createElement('td');
  cellEl.textContent = this.totalCookiesSold;
  rowEl.appendChild(cellEl);

}

//Adds a header to the table with an hour for each column. Hours are stored in a global array.
function createTableHeader() {
  var header = document.getElementById('sales-table');
  var headerRow = document.createElement('tr');
  var headerCell = document.createElement('td');
  headerCell.textContent = 'Hours Of Operation';

  for (var i = 0 ; i < (hoursOfOperation.length +2) ; i++) {

  }

}

//Adds a footer to the table with hourly totals and tracks a brand total cookies sold.
function createTableFooter() {
  var dailySum = 0;
  var hourlySum = 0;
  var footer = document.getElementById('sales-table');
  var footerRow = document.createElement('tr');
  var footerCell = document.createElement('td');
  cell.textContent = 'Hourly Sales Total';
  footer.appendChild(footerRow);
  footerRow.appendChild(footerCell)

  for (var i = 0; i < hoursOpen; i++) {


    for (var j = 0; j < storeList.length; j++) {

    }
  }

}
//These are the instances for each individual store created from the constructor function using the 'new' keyword
var seattleStore = new NewStore('Seattle', 23, 65, 6.3);
var tokyoStore = new NewStore('Tokyo', 3, 24, 1.2);
var dubaiStore = new NewStore('Dubai', 11, 38, 3.7);
var parisStore = new NewStore('Paris', 20, 38, 2.3);
var limaStore = new NewStore('Lima', 2, 16, 4.6);