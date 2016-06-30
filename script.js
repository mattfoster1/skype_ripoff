//need to have checker for anything submitted here

// example code:
// function CheckLoginInDB($username,$password)
// {
//     if(!$this->DBLogin())
//     {
//         $this->HandleError("Database login failed!");
//         return false;
//     }          
//     $username = $this->SanitizeForSQL($username);
//     $pwdmd5 = md5($password);
//     $qry = "Select name, email from $this->tablename ".
//         " where username='$username' and password='$pwdmd5' ".
//         " and confirmcode='y'";
     
//     $result = mysql_query($qry,$this->connection);
     
//     if(!$result || mysql_num_rows($result) <= 0)
//     {
//         $this->HandleError("Error logging in. ".
//             "The username or password does not match");
//         return false;
//     }
//     return true;
// }



// <!-- Here is the CheckLogin() function code. -->

// function CheckLogin()
// {
//      session_start();
 
//      $sessionvar = $this->GetLoginSessionVar();
      
//      if(empty($_SESSION[$sessionvar]))
//      {
//         return false;
//      }
//      return true;
// }

if (typeof jQuery == 'undefined') {

alert("jQuery thumbsdown")

}


// var CBCont = document.getElementById("chkCont");

var checkBox = function() {
	var checkboxJS = document.getElementById("check_box");
	var CBCont = document.getElementById("chkCont");
	// console.log(checkboxJS.checked);

	if (checkboxJS.checked == false) {
		// checkboxJS.checked = true;
		// console.log(checkboxJS.checked);
		// CBCont.class = "checked";
		// console.log("Checking");
		// return;
	} else if (checkboxJS.checked == true) {
		// checkboxJS.checked = false;
		// console.log(checkboxJS.checked);
		// CBCont.class = "unchecked";
		// console.log("Unchecking");
		// return;
	} else {
		alert("nope");
	}
	// console.log(checkboxJS.checked);
}

// checkboxJS.onclick = checkBox();