
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
        window.location.href = "alex.html";
        return;
    }
    if (input === "96MP"){
        window.location.href = "madara.html";
        return;
    }
    if (input === "CHSZ"){
        window.location.href = "olia.html";
        return;
    }
    if (input === "24HE"){
        window.location.href = "heli.html";
        return;
    }
    if (input === "IDOT"){
        window.location.href = "bralis.html";
        return;
    }
    else {
      // Show an error or handle invalid input
      alert("Incorrect code. Please try again.");
      return;
    }
  }
