let userInputFirstName;
let userInputLastName;
let userFull_Name, userName, userFullName;
let additional = new Date();
let additionalNumber = " ";

validUserName();
function validUserName(){
     userInputFirstName = prompt("Enter your First name: ");


while(userInputFirstName.length === " " || userInputFirstName.length === 0 )
    {
        userInputFirstName = prompt("Please enter a valid First Name by trying again: ");  
    }
    
    userInputLastName = prompt("Enter your Last name:");

while(userInputLastName.length === " " || userInputLastName.length === 0 )
    {
        userInputLastName = prompt("Please enter a valid Last Name by trying again: ");
    }
   
}
userFullName = (userInputFirstName.replace(/\s/g, "")+userInputLastName.replace(/\s/g, ""));

createUserName(userInputFirstName,userInputLastName);

function createUserName(){
 
userFull_Name = userInputFirstName+" "+userInputLastName;

document.getElementById("line").innerHTML=(`Provided Name : ${userFull_Name}`);
     


    userInputFirstName = userInputFirstName.toLowerCase();
    userInputLastName = userInputLastName.toLowerCase();

    userInputFirstName = userInputFirstName.replace(/\s/g, "");
    userInputLastName = userInputLastName.replace(/\s/g, "");

    if(userInputFirstName.length+userInputLastName.length >= 8)
    {

    if(userInputFirstName.length >= 4 && userInputLastName.length >= 4)
    {
        userInputFirstName = userInputFirstName.slice(0,4);
        userInputLastName = userInputLastName.slice(0,4);
    }

      else if(userInputFirstName.length >= 5 && userInputLastName.length == 3)
      {
        userInputFirstName = userInputFirstName.slice(0,5);
        userInputLastName = userInputLastName.slice(0,3);
      }

      else if(userInputFirstName.length >= 6 && userInputLastName.length == 2)
      {
        userInputFirstName = userInputFirstName.slice(0,6);
        userInputLastName = userInputLastName.slice(0,2);
      }

      else if(userInputFirstName.length >=7 && userInputLastName.length == 1)
      {
        userInputFirstName = userInputFirstName.slice(0,7);
        userInputLastName = userInputLastName.slice(0,1);
      }

      else if(userInputFirstName.length == 3 && userInputLastName.length >= 5)
      {
        userInputFirstName = userInputFirstName.slice(0,3);
        userInputLastName = userInputLastName.slice(0,5);
      }

      else if(userInputFirstName.length == 2 && userInputLastName.length >= 6)
      {
        userInputFirstName = userInputFirstName.slice(0,2);
        userInputLastName = userInputLastName.slice(0,6);
      }

      else if(userInputFirstName.length == 1 && userInputLastName.length >= 7)
      {
        userInputFirstName = userInputFirstName.slice(0,1);
        userInputLastName = userInputLastName.slice(0,7);
      } 
    
    }

    else if(userInputFirstName.length+userInputLastName.length < 8)
    {
        additionalNumber = 8 - userFullName.length;
        additionalNumber = prompt(`Enter the ${additionalNumber} digit number that can be remembered:`);
        return userName = userFullName+additionalNumber, additionalNumber;
    }

    return userName = (userInputFirstName+userInputLastName);
}

document.getElementById("line1").innerHTML=(`Created User Name : ${userName}`);


emailId(userFullName);

function emailId(){
    if(additionalNumber == " ")
    {
     document.getElementById("line2").innerHTML=(`Created E-mail ID : ${userFullName+userFullName.length}@gmail.com`);
    }

    else
    {
     document.getElementById("line2").innerHTML=(`Created E-mail ID : ${userFullName+additionalNumber}@gmail.com`);
    }
}

document.getElementById("line3").innerHTML=(`Date of ID creation : ${additional.getDate()}/${additional.getMonth()+1}/${additional.getFullYear()}`);




