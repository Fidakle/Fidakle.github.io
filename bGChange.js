function color(element) {
    var red = rC();
    var green = rC();
    var blue = rC();
    var darkRed, darkGreen, darkBlue;
    if ( red + 100 > 255 || green + 100 > 255 || blue + 100 > 255 ) {
        darkRed = red - 100;
        darkGreen = green - 100;
        darkBlue = blue - 100;
    } else {
        darkRed = red + 100;
        darkGreen = green + 100;
        darkBlue = blue + 100;
    }
    
    element.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    element.style.color = "rgb("+darkRed+","+darkGreen+","+darkBlue+")";
}

function rC() {
    return Math.random()*255;
}