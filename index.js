// Code your solution in this file!
const hq = 42;
const feet = 264;

const distanceFromHqInBlocks = (someValue) => {
if (someValue > 42) {
    return someValue - 42;
}
else if (someValue < 42) {
    return 42 - someValue;
}
}

const distanceFromHqInFeet = (someValue) => {
    return distanceFromHqInBlocks(someValue) * feet;
}

const distanceTravelledInFeet = (num1, num2) => {
    if (num1 > num2) {
        return (num1 - num2) * 264;
    }
    else if (num1 < num2) {
        return (num2 - num1) *264;
    }
}

const calculatesFarePrice = (num1, num2) => {
    if (distanceTravelledInFeet(num1, num2) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(num1, num2) > 400 && distanceTravelledInFeet(num1, num2) <= 2000) {
        return (distanceTravelledInFeet(num1, num2) - 400) * 2 / 100
    }
    else if (distanceTravelledInFeet(num1, num2) > 2000 && distanceTravelledInFeet(num1, num2) <= 2500) {
        return 25
    }
    else return "cannot travel that far"
}