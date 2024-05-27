

function fun() {
   let users = [anish = { uname: 1, password: 123 }, raja = { uname: 2, password: 234 }, deva = { uname: 3, password: 345 }, chinnarasu = { uname: 4, password: 456 }];
   let un = document.querySelector(".un");
   let pass = document.querySelector(".pass1");
   let uname = document.querySelector("#uname").value;
   let password = document.querySelector("#pass").value;

   for (i = 0; i <= users.length - 1; i++) {

      console.log(users[i]);
      if (uname == users[i].uname) {
         if (users[i].password == password) {
            // pass.innerHTML = "Right";
         }
         else {
            // pass.innerHTML = "Wrong";
         }
      }
      else if (users[i].uname == users[i].uname) {
         // console.log(users[i].uname,uname);
         // console.log("ok");
      }
      else{
         // console.log(users[i].uname, uname);
      }
 
   }
}