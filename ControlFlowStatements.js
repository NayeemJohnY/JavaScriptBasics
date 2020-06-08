/**
 * Control Flow statements
 * IF-else ; siwtch
 */

//if else
let Age =60
if(Age < 18){
    console.log("Not Eligible to Vote");
}
else if(Age>=18 && Age <60){
    console.log(" Eligible to Vote");
} else console.log("Eligible for Vote. Senior Citizen");

//Switch 
let role='guest';
switch(role){
    case 'guest':
        console.log("Guest User")
        break;
    case 'admin':
        console.log("Admin User")
        break;
    default :
        console.log("No User")
        break;
}
var b = new Boolean(false);
if (b == true)
    console.log(b)  

//throw 'Error';
//throw 42;
//throw {toString: function() { return "I'm an object!"; } };
// Create an object type UserException
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }
  
  // Make the exception convert to a pretty string when used as a string 
  // (e.g., by the error console)
  UserException.prototype.toString = function() {
    return `${this.name}: "${this.message}"`;
  }
  
  // Create an instance of the object type and throw it
  //throw new UserException('Value too high');

  function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo'; // throw keyword is used here
    }
  }
  
  try { // statements to try
    monthName = getMonthName(13); // function could throw exception
    console.log(monthName)
  }
  catch (e) {
    monthName = 'unknown';
    console.log(e); // pass exception object to error handler (i.e. your own function)
  }

  //monthName = getMonthName(13);


  function f() {
    try {
      console.log(0);
      throw 'bogus';
    } catch(e) {
      console.log(1);
      return true;    // this return statement is suspended
                      // until finally block has completed
      console.log(2); // not reachable
    } finally {
      console.log(3);
      return false;   // overwrites the previous "return"
      console.log(4); // not reachable
    }
    // "return false" is executed now  
    console.log(5);   // not reachable
  }
  console.log(f()); // 0, 1, 3, false