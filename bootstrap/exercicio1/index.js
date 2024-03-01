require('dotenv').config();

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formVGT");
    form.setAttribute("action", "https://formspree.io/f/" + process.env.API_KEY);
});
