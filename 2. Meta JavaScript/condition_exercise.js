//if-else-if statements

var age = 17;
if(age>=65){
    console.log("You get your income from your pension");
}
else if(age<65 && age>=18){
    console.log("Each month you get a salary");
}
else if(age<18){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age variable is not numerical");
}

//Switch statment
var day = "Sunday";
switch(day){
    case "Monday":
    console.log("Office");
    break;
    case "Tuesday":
    console.log("Office");
    break;
    case "Wednesday":
    console.log("Office");
    break;
    case "Thursday":
    console.log("Office");
    break;
    case "Friday":
    console.log("Office and weekned masti");
    break;
    case "Saturday":
    console.log("Weekend Plans");
    break;
    case "Sunday":
    console.log("Just Rest because its Sunday");
    break;
    default:
    console.log("There is no such day");
}