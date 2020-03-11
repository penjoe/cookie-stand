'use strict'

//Array that will hold all store locations for easier reference
var storeList = [];

//This constructor function will create a template from which I can make any number of store locations by creating an instance for each desired store

function NewStore(name, minCustomer, maxCustomer, avgCookies, hoursOpen, totalCustomers, totalCookies, customerSum, cookieSum, hours) {

  //Properties for objects to be created, defined when creating object instance
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.hoursOpen = hoursOpen;
  this.totalCustomers = totalCustomers;
  this.totalCookies = totalCookies;
  this.customerSum = customerSum;
  this.cookieSum = cookieSum;
  this.hours = hours;
}

  //Generates random number * average cookie sales
  NewStore.prototype.randomCustomer = function() {

    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    var cookies = Math.floor(customers * this.avgCookies);
    var hourlyTotals = [customers, cookies];
    return hourlyTotals;
    
  }

  //Calculates total customers and total sales and store them in an array
  NewStore.prototype.salesData = function() {

    for (var i = 0; i < this.hoursOpen; i++) {
      var salesTotals = this.randomCustomer();
      
        this.totalCustomers.push(salesTotals[0]);
        this.customerSum = (this.customerSum + salesTotals[0]);
        
        this.totalCookies.push(salesTotals[1]);
        this.cookieSum = (this.cookieSum + salesTotals[1]);
    }
}

  //Writes sales data to a list for each location   ***needs to be changed where it creates a table***
  NewStore.prototype.write = function() {

    var listEl = document.getElementById('list');
    var salesList = document.createElement('ul');
    var itemEl = document.createElement('li');
    var nameEl = document.createElement('p');
      nameEl.textContent = this.name;
      itemEl.appendChild(nameEl);
      listEl.appendChild(itemEl);
      listEl.appendChild(salesList);

    for (var i = 0; i < this.totalCookies.length; i++) {
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.totalCookies[i];
    }

    var sumEl = document.createElement('li');
    sumEl.textContent = 'total : ' + this.cookieSum;
    salesList.appendChild(sumEl);

  }

  var seattleStore = NewStore();
  var tokyoStore = NewStore();
  var dubaiStore = NewStore();
  var parisStore = NewStore();
  var limaStore = NewStore();

//<----------Following code will be deleted/modified once constructor function is completed---------->
// Object #1 for Seattle store

var seattleStore = {

  name: 'Seattle' ,
  minCustomer: 23 ,
  maxCustomer: 65 ,
  avgCookies: 6.3 ,
  hoursOpen: 14 ,
  totalCustomers: [],
  totalCookies: [],
  customerSum: 0,
  cookieSum: 0,
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  
  //This method calculates a random number for customers per hour and multiples that by avg. cookie sales and returns and array with those two values.
  // randomCustomer: function() {

  //   var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  //   // console.log(customers)
  //   var cookies = Math.floor(customers * this.avgCookies);
  //   // console.log(cookies);
  //   var hourlyTotals = [customers, cookies];
  //   return hourlyTotals;
    
  // } ,

  //This method will take the values from the 'randomCustomer()' method and runs them through a loop for each hour the store is open and stores them in an array. Loops through and adds the sum of those values. The result is 2 arrays, one for total customers and one for total cookie sales, and two sums for their respective types.
  // salesData: function() {

  //     for (var i = 0; i < this.hoursOpen; i++) {
  //       var salesTotals = this.randomCustomer();
        
  //         this.totalCustomers.push(salesTotals[0]);
  //         this.customerSum = (this.customerSum + salesTotals[0]);
          
  //         this.totalCookies.push(salesTotals[1]);
  //         this.cookieSum = (this.cookieSum + salesTotals[1]);
  //     }
  // },

  //This method will create a list and write the stored data into a list.
  // write: function() {
  //   var listEl = document.getElementById('list');
  //   var salesList = document.createElement('ul');
  //   var itemEl = document.createElement('li');
  //   var nameEl = document.createElement('p');
  //     nameEl.textContent = this.name;
  //     itemEl.appendChild(nameEl);
  //     listEl.appendChild(itemEl);
  //     listEl.appendChild(salesList);

  //   //This loops through an writes to document the total cookies sold per hour into a list
  //   for (var i = 0; i < this.totalCookies.length; i++) {
  //     var hourEl = document.createElement('li');
  //     salesList.appendChild(hourEl);
  //     hourEl.textContent = this.totalCookies[i];
  //   }

  //   //This writes sum of all cookies to bottom of the list
  //   var sumEl = document.createElement('li');
  //   sumEl.textContent = 'total : ' + this.cookieSum;
  //   salesList.appendChild(sumEl);

  // }
}
seattleStore.salesData();
seattleStore.write();

// Object #2 for Tokyo Store
var tokyoStore = {

  name: 'Tokyo' ,
  minCustomer: 3 ,
  maxCustomer: 24 ,
  avgCookies: 1.2 ,
  hoursOpen: 14 ,
  totalCustomers: [],
  totalCookies: [],
  customerSum: 0,
  cookieSum: 0,
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  
  //This method calculates a random number for customers per hour and multiples that by avg. cookie sales and returns and array with those two values.
  randomCustomer: function() {

    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(customers)
    var cookies = Math.floor(customers * this.avgCookies);
    // console.log(cookies);
    var hourlyTotals = [customers, cookies];
    return hourlyTotals;
    
  } ,

  //This method will take the values from the 'randomCustomer()' method and runs them through a loop for each hour the store is open and stores them in an array. Loops through and adds the sum of those values. The result is 2 arrays, one for total customers and one for total cookie sales, and two sums for their respective types.
  salesData: function() {

      for (var i = 0; i < this.hoursOpen; i++) {
        var salesTotals = this.randomCustomer();
        
          this.totalCustomers.push(salesTotals[0]);
          this.customerSum = (this.customerSum + salesTotals[0]);
          
          this.totalCookies.push(salesTotals[1]);
          this.cookieSum = (this.cookieSum + salesTotals[1]);
      }
  },
  //This method will create a list and write the stored data into a list.
  write: function() {
    var listEl = document.getElementById('list');
    var salesList = document.createElement('ul');
    var itemEl = document.createElement('li');
    var nameEl = document.createElement('p');
      nameEl.textContent = this.name;
      itemEl.appendChild(nameEl);
      listEl.appendChild(itemEl);
      listEl.appendChild(salesList);

    for (var i = 0; i < this.totalCookies.length; i++) {
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.totalCookies[i];
    }

    var sumEl = document.createElement('li');
    sumEl.textContent = 'total : ' + this.cookieSum;
    salesList.appendChild(sumEl);

  }
}

tokyoStore.salesData();
tokyoStore.write();

// Object #3 for Dubai
var dubaiStore = {

  name: 'Dubai' ,
  minCustomer: 11 ,
  maxCustomer: 38 ,
  avgCookies: 3.7 ,
  hoursOpen: 14 ,
  totalCustomers: [],
  totalCookies: [],
  customerSum: 0,
  cookieSum: 0,
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  
  //This method calculates a random number for customers per hour and multiples that by avg. cookie sales and returns and array with those two values.
  randomCustomer: function() {

    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(customers)
    var cookies = Math.floor(customers * this.avgCookies);
    // console.log(cookies);
    var hourlyTotals = [customers, cookies];
    return hourlyTotals;
    
  } ,

  //This method will take the values from the 'randomCustomer()' method and runs them through a loop for each hour the store is open and stores them in an array. Loops through and adds the sum of those values. The result is 2 arrays, one for total customers and one for total cookie sales, and two sums for their respective types.
  salesData: function() {

      for (var i = 0; i < this.hoursOpen; i++) {
        var salesTotals = this.randomCustomer();
        
          this.totalCustomers.push(salesTotals[0]);
          this.customerSum = (this.customerSum + salesTotals[0]);
          
          this.totalCookies.push(salesTotals[1]);
          this.cookieSum = (this.cookieSum + salesTotals[1]);
      }
  },
  //This method will create a list and write the stored data into a list.
  write: function() {
    var listEl = document.getElementById('list');
    var salesList = document.createElement('ul');
    var itemEl = document.createElement('li');
    var nameEl = document.createElement('p');
      nameEl.textContent = this.name;
      itemEl.appendChild(nameEl);
      listEl.appendChild(itemEl);
      listEl.appendChild(salesList);

    for (var i = 0; i < this.totalCookies.length; i++) {
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.totalCookies[i];
    }

    var sumEl = document.createElement('li');
    sumEl.textContent = 'total : ' + this.cookieSum;
    salesList.appendChild(sumEl);

  }
}

dubaiStore.salesData();
dubaiStore.write();


// Object #4 Paris
var parisStore = {

  name: 'Paris' ,
  minCustomer: 20 ,
  maxCustomer: 38 ,
  avgCookies: 2.3 ,
  hoursOpen: 14 ,
  totalCustomers: [],
  totalCookies: [],
  customerSum: 0,
  cookieSum: 0,
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  
  //This method calculates a random number for customers per hour and multiples that by avg. cookie sales and returns and array with those two values.
  randomCustomer: function() {

    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(customers)
    var cookies = Math.floor(customers * this.avgCookies);
    // console.log(cookies);
    var hourlyTotals = [customers, cookies];
    return hourlyTotals;
    
  } ,

  //This method will take the values from the 'randomCustomer()' method and runs them through a loop for each hour the store is open and stores them in an array. Loops through and adds the sum of those values. The result is 2 arrays, one for total customers and one for total cookie sales, and two sums for their respective types.
  salesData: function() {

      for (var i = 0; i < this.hoursOpen; i++) {
        var salesTotals = this.randomCustomer();
        
          this.totalCustomers.push(salesTotals[0]);
          this.customerSum = (this.customerSum + salesTotals[0]);
          
          this.totalCookies.push(salesTotals[1]);
          this.cookieSum = (this.cookieSum + salesTotals[1]);
      }
  },
  //This method will create a list and write the stored data into a list.
  write: function() {
    var listEl = document.getElementById('list');
    var salesList = document.createElement('ul');
    var itemEl = document.createElement('li');
    var nameEl = document.createElement('p');
      nameEl.textContent = this.name;
      itemEl.appendChild(nameEl);
      listEl.appendChild(itemEl);
      listEl.appendChild(salesList);

    for (var i = 0; i < this.totalCookies.length; i++) {
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.totalCookies[i];
    }

    var sumEl = document.createElement('li');
    sumEl.textContent = 'total : ' + this.cookieSum;
    salesList.appendChild(sumEl);

  }
}

parisStore.salesData();
parisStore.write();


//Object #4 Lima
var limaStore = {

  name: 'Lima' ,
  minCustomer: 2 ,
  maxCustomer: 16 ,
  avgCookies: 4.6 ,
  hoursOpen: 14 ,
  totalCustomers: [],
  totalCookies: [],
  customerSum: 0,
  cookieSum: 0,
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  
  //This method calculates a random number for customers per hour and multiples that by avg. cookie sales and returns and array with those two values.
  randomCustomer: function() {

    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(customers)
    var cookies = Math.floor(customers * this.avgCookies);
    // console.log(cookies);
    var hourlyTotals = [customers, cookies];
    return hourlyTotals;
    
  } ,

  //This method will take the values from the 'randomCustomer()' method and runs them through a loop for each hour the store is open and stores them in an array. Loops through and adds the sum of those values. The result is 2 arrays, one for total customers and one for total cookie sales, and two sums for their respective types.
  salesData: function() {

      for (var i = 0; i < this.hoursOpen; i++) {
        var salesTotals = this.randomCustomer();
        
          this.totalCustomers.push(salesTotals[0]);
          this.customerSum = (this.customerSum + salesTotals[0]);
          
          this.totalCookies.push(salesTotals[1]);
          this.cookieSum = (this.cookieSum + salesTotals[1]);
      }
  },
  //This method will create a list and write the stored data into a list.
  write: function() {
    var listEl = document.getElementById('list');
    var salesList = document.createElement('ul');
    var itemEl = document.createElement('li');
    var nameEl = document.createElement('p');
      nameEl.textContent = this.name;
      itemEl.appendChild(nameEl);
      listEl.appendChild(itemEl);
      listEl.appendChild(salesList);

    for (var i = 0; i < this.totalCookies.length; i++) {
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.totalCookies[i];
    }

    var sumEl = document.createElement('li');
    sumEl.textContent = 'total : ' + this.cookieSum;
    salesList.appendChild(sumEl);

  }
}

limaStore.salesData();
limaStore.write();

