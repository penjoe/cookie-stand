'use strict'

// function randomCustomerHour(min, max) {
//   return Math.floor(Math.random) * (max - min);
// }

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
    var itemEl = document.createElement('li');
    var nameEl = document.createElement('p');
    nameEl.textContent = this.name;
    itemEl.appendChild(nameEl);
    listEl.appendChild(itemEl);


  }
}
seattleStore.salesData();
seattleStore.write();


console.log(seattleStore.salesData())
console.log(seattleStore.totalCustomers);
console.log(seattleStore.totalCookies);
console.log(seattleStore.customerSum);
console.log(seattleStore.cookieSum);


