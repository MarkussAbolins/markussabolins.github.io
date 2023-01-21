alert("test");


$().ready(function(){
    /*code here*/
    console.log("On ready")
    alert("test2");
    $("#headerContainer").load("header.html");
})
