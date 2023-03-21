function selectPosition() {
    console.log("Clicky clack");
    var positionDivs = document.getElementsByClassName('positions-item');
    for (var i = 0; i < positionDivs.length; i++) {
        positionDivs[i].style.display="none";
    }
    var randomNumber = Math.floor(Math.random() * positionDivs.length);
    positionDivs[randomNumber].style.display = "inline";
}