AOS.init({
  duration: 1500
});
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}
const scriptURL ='https://script.google.com/macros/s/AKfycbzZ4KACmVIo4NgFEdwLGkFjFt6koA3zWb67MO6ABailhgtFIGXAw3XjjX25RdwN637h6A/exec'
const form = document.forms['google-sheet']
