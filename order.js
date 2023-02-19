function callvalue(){


let uname= document.getElementById('uname').value;
console.log(uname);
let mail= document.getElementById('mail').value;
console.log(mail);
let contact= document.getElementById('contact').value;
console.log(contact);
let number=document.getElementById('number').value;
console.log(number);
let places= document.querySelector('#places').value;
console.log(places);
document.writeln("Thank You "+uname+"<br>"+"For purchasing "+  number + "Packages ."+"Your Location for your choosen adventure is "+places+"<br>");
}