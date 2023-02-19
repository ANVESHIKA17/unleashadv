function callvalue(){


    let username= document.getElementById('username').value;
    console.log(username);
    let mail= document.getElementById('mail').value;
    console.log(mail);
    let phn= document.getElementById('phn').value;
    console.log(phn);
   
    let items= document.getElementById('items').value;
    console.log(items);
    document.writeln("Thank You "+username+"<br>"+"For purchasing "+  items +" products, Expect Delivery in 5-4 WORKING DAYS! " );
    }