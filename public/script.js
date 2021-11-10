let dark = true
let i = 0

// Set the color to the specific element
function setColor(x) {
    for (let i = 0; i < x.length; i++) {
        x[i].style.color = dark ? "#4a94fa" : "#990099";
        x[i].style.borderColor = dark ? "#4a94fa" : "#990099";
        x[i].style.backgroundColor = dark ? "#000000" : "#ffffff";
        if (dark) {
            x[i].style.setProperty('--site-color', "#4a94fa");
        } else {
            x[i].style.setProperty('--site-color', "#990099");
        }
    }
}

setInterval(() => {

    // White or Dark Mode
    if (i == 360) i = 0

    // Apply site wide color scheme
    setColor(document.getElementsByTagName("body"));
    setColor(document.getElementsByTagName("table"));
    setColor(document.getElementsByClassName("hover-underline-animation"))
    
    document.querySelectorAll("h1").forEach(e => {
        e.style.background = dark ? `linear-gradient(${i}deg, rgba(2, 0, 36, 1) 25%, rgba(2, 0, 36, 1) 50%, #4a94fa 75%, #4a94fa 100%)` : `linear-gradient(${i}deg, rgb(117, 22, 117) 25%, rgb(82, 41, 82) 50%, rgb(75, 23, 75) 75%, rgb(82, 41, 82) 100%)`
        e.style.webkitBackgroundClip = "text"
    })
    i++
}, 10)