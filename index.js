// Code your solution in this file!
//creating a global array of scuber drivers
const alldrivers = ['Antonia','Nuru','Amari','Mo'];

// implementing a function called returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers){  //function takes one argument, an array 
    return drivers.slice(0,2);  //it returns the first two names of our array
};
console.log(returnFirstTwoDrivers(alldrivers));

//implementing a function called returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);  //it returns the names of the last two drivers
};
console.log(returnLastTwoDrivers(alldrivers));

//implementing an array called selectingDrivers
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

//invoking the functions from the array 
//using the global array of scuber drivers
console.log(selectingDrivers[0](alldrivers));
console.log(selectingDrivers[1](alldrivers));

//implementing a function called createFareMultiplier
const createFareMultiplier = function(pay){
    return function(fare){
        return fare*pay
    };
};

//implementing a function that doubles fare 
const fareDoubler= createFareMultiplier(2);
console.log(fareDoubler(10));

//implementing a function that tripple fare
const fareTripler = createFareMultiplier(3);
console.log(fareTripler(20));

//implementing a function that selects drivers 
function selectDifferentDrivers(alldrivers,selectsdriver){
    return selectsdriver(alldrivers);

}
console.log(selectDifferentDrivers(alldrivers,returnFirstTwoDrivers));
console.log(selectDifferentDrivers(alldrivers,returnLastTwoDrivers));