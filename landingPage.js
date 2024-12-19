
$().ready(function(){
    /*code here*/
    //console.log("On ready")
    //$("#headerContainer").load("header.html");
})

function handleLogin() {
    // Get the value from the input field
    input = document.getElementById("loginInput").value;
    console.log(input);
    // Check if the input equals "test"
    if (input === "test") {
      // Redirect to testLetter.html
      window.location.href = "testLetter.html";
      return;
    }
    if (input === "AL91"){
        return;
    }
    if (input === "96MP"){
        return;
    }
    if (input === "CHSZ"){
        return;
    }
    if (input === "24HE"){
        return;
    }
    else {
      // Show an error or handle invalid input
      alert("Incorrect code. Please try again.");
      return;
    }
  }
