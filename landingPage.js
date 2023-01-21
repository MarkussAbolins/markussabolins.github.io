alert("test");

document.onload = function onLoadPage() {
    alert("test2");
    $("#headerContainer").load("header.html");
}