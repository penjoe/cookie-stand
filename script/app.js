'use strict'

// Array that will hold all store locations for easier reference
var storeList = [];

// Number of hours each store is open
var hoursOpen = 14;

// Array of strings for each hour the store is open that will be used to write onto the table header cells 
var hoursOfOperation = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

// This constructor function will create a template from which I can make any number of store locations by creating an instance for each desired store

function NewStore(storeName, minCustomer, maxCustomer, avgCookies) {

  // Properties for objects to be created, defined when creating object instance
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  
  // This is all of my store sales metrics stored in an object
  var hourlyData = this.salesData();

  this.customersPerHour = hourlyData.customerData;        //customers per hour
  this.totalCustomersServed = hourlyData.customerTotals;  //customer sum
  this.cookiesPerHour = hourlyData.cookieData;            //cookies per hour
  this.totalCookiesSold = hourlyData.cookieTotals;        //cookie sum

  // Pushes each store to a global array for easy reference
  storeList.push(this);

  // this.createTable();
}


// Calculates hourly and total customers and hourly and total sales and store them in an array
NewStore.prototype.salesData = function() {

  // var totals = this.randomCustomer();
  var hourlyCustomers = [];
  var hourlyCookies = [];
  var customerSum = 0;
  var cookieSum = 0;

  for (var i = 0; i < hoursOpen; i++) {
    
    // customers served per hour
    var customersPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    hourlyCustomers.push(customersPerHour);
    // cookies sold per hour
    var cookiesPerHour = Math.floor(customersPerHour * this.avgCookies);
    hourlyCookies.push(cookiesPerHour);
    // total customers
    customerSum = customerSum + customersPerHour;
    // total cookies
    cookieSum = cookieSum + cookiesPerHour;
    
  }
  return {
    customerData: hourlyCustomers,  //customers per hour
    customerTotals: customerSum,    //customer sum
    cookieData: hourlyCookies,      //cookies per hour
    cookieTotals: cookieSum         //cookie sum
  }
}

// This method will create a table and populate it with the sales data for each store.
NewStore.prototype.createTable = function() {
  
  // Variable storing the table elements
  var tableEl = document.getElementById('sales-table');
  var rowEl = document.createElement('tr');
  var cellEl = document.createElement('td');
  cellEl.textContent = this.storeName;
  tableEl.appendChild(rowEl);
  rowEl.appendChild(cellEl);

  // This loops will create 14 cells per row
  for (var cookiesSold = 0 ;  cookiesSold < this.cookiesPerHour.length ; cookiesSold++) {

    cellEl = document.createElement('td');
    cellEl.textContent = this.cookiesPerHour[cookiesSold];
    rowEl.appendChild(cellEl);
  }

  // Adds daily totals to end column of table
  cellEl = document.createElement('td');
  cellEl.textContent = this.totalCookiesSold;
  rowEl.appendChild(cellEl);
}

// Adds a header to the table with an hour for each column. Hours are stored in a global array.
function createTableHeader() {
  var header = document.getElementById('sales-table');
  var headerRow = document.createElement('tr');
  var headerCell = document.createElement('td');
  
  headerRow.appendChild(headerCell);

  // Loops through array with each hour open as a string and adds that string to a cell
  for (var i = 0 ; i <= (hoursOfOperation.length) ; i++) {

    headerCell = document.createElement('td');
    headerCell.textContent = hoursOfOperation[i];
    headerRow.appendChild(headerCell);

  }

  headerCell.textContent = 'Store Sales Totals';
  header.appendChild(headerRow);
  headerRow.appendChild(headerCell);

}

var seattleStore = new NewStore('Seattle', 23, 65, 6.3);
var tokyoStore = new NewStore('Tokyo', 3, 24, 1.2);
var dubaiStore = new NewStore('Dubai', 11, 38, 3.7);
var parisStore = new NewStore('Paris', 20, 38, 2.3);
var limaStore = new NewStore('Lima', 2, 16, 4.6);

// Adds a footer to the table with hourly totals and tracks a brand total cookies sold.
function createTableFooter() {
  var dailySum = 0;
  var footer = document.getElementById('sales-table');
  var footerRow = document.createElement('tr');
  var footerCell = document.createElement('td');
  footerCell.textContent = 'Hourly Sales Total';
  footerRow.appendChild(footerCell);

  // Outer loop goes through hours totals
  for (var i = 0; i < hoursOpen; i++) {

    footerCell = document.createElement('td');
    var hourlySum = 0;

    // Inner loops goes through the store list and grabs the sales from each store
    for (var j = 0; j < storeList.length; j++) {

      hourlySum = hourlySum + storeList[j].cookiesPerHour[i];

    }

    // adds a cell each time the outer loop runs that appends daily sum to the cell
    footerCell.textContent = hourlySum;
    footerRow.appendChild(footerCell)
    dailySum = dailySum + hourlySum;

  }
  
  // After loops end, creates a cell and appends brand total to end cell of footer
  footerCell = document.createElement('td');
  footerCell.textContent = ('Company Total: ' + dailySum);
  footerRow.appendChild(footerCell);
  footer.appendChild(footerRow);
  
}

// variable used to reference table html element
var addNewStoreRow = document.getElementById('add-store');
// This function takes user data input into the form and uses that to create a new store on the table
function addToForm(event) {

  //cancels default behavior of event
  event.preventDefault();
  
  // variables used to reference the specific html elements and their values
  var storeName = event.target.storeName.value;
  var minimumCustomers = event.target.minCust.value;
  var maximumCustomers = event.target.maxCust.value;
  var AverageSales = event.target.avgCookies.value;

  // User input from form is used to make a new store object via constructor
  new NewStore(storeName, minimumCustomers, maximumCustomers, AverageSales)
  
}

addNewStoreRow.addEventListener('submit' , addToForm);

// variable used to reference html button element
var formSubmitButton = document.getElementById('submit-button');
// function that will render new row to the table upon click
function renderNewStore() {
  
  document.getElementById('sales-table').innerHTML = null;
  createTableHeader();
  
  for (var i = 0; i < storeList.length; i++) {
    storeList[i].createTable();
  }
  createTableFooter();
}

formSubmitButton.addEventListener('click' , renderNewStore);

// These are the instances for each individual store created from the constructor function using the 'new' keyword
createTableHeader();
seattleStore.createTable();
tokyoStore.createTable();
dubaiStore.createTable();
parisStore.createTable();
limaStore.createTable();
createTableFooter();