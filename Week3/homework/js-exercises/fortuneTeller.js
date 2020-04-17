'use strict'

let numChildren = ['2', '3', '4', '5', '6'];
let partnerName = ['Sara', 'Heba', 'Maryem', 'Layla', 'Scarlet'];
let locations = ['Usa', 'Konoha', 'Gotham', 'Newyork', 'Germany'];
let jobs = ['Teacher', 'Engeneer', 'Developer', 'Lawyer', 'Seller'];

// function select randomly from the arrays.
function tellFortune(numChildren, partnerName, locations, jobs) {
    let randomJobs = jobs[Math.floor(jobs.length * Math.random())];
    let randomChildren = numChildren[Math.floor(numChildren.length * Math.random())];
    let randomLocation = locations[Math.floor(locations.length * Math.random())];
    let randomNames = partnerName[Math.floor(partnerName.length * Math.random())];
    return `you will be a ${randomJobs} in ${randomLocation}, and married to ${randomNames} with ${randomChildren} kids`;
    //console.log('you will be' +randomJobs+ " " +'in'+' '+randomLocation+' '+'and married to'+' '+randomNames+' '+' '+'with'+randomChildren);
        
};

console.log(tellFortune(numChildren,partnerName,locations,jobs));

