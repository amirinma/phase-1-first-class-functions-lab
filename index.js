// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) =>{
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = (drivers) =>{
    return drivers.slice(drivers.length-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = (argument) =>{
    return function(){
        return Math.abs(argument*5);
    }
}
const fareDoubler = (createFareMultiplier) =>{
    return Math.abs(createFareMultiplier*2);
}
const fareTripler = (createFareMultiplier) =>{
    return Math.abs(createFareMultiplier*3);
}

function selectDifferentDrivers(drivers, callback){
    if (callback === returnFirstTwoDrivers){
        return drivers.slice(0,2)
    } else{
        return drivers.slice(-2)
    }
}