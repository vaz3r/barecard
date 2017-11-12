var extra_cards = document.getElementById("extra-cards");
var details_button = document.getElementById("details-button");
var details_text = document.getElementById("details-text");

extra_cards.style.display = "none";

details_button.onclick = function () {
    if (extra_cards.getAttribute("style") == null || extra_cards.getAttribute("style") == "display: flex;") {
        extra_cards.style.display = "none";
        details_text.innerText = "VIEW DETAILS";
        details_button.style.marginTop = "0";
    } else {
        extra_cards.style.display = "flex";
        details_text.innerText = "HIDE DETAILS";
        details_button.style.marginTop = "2%";
    }

    console.log(extra_cards.getAttribute("style"));
};

var _call = document.getElementById("_call");
var _mail = document.getElementById("_mail");

_call.onclick = function () {
    document.location.href = "tel:" + _call.getAttribute("data-value");  
    console.log("tel:" + _call.getAttribute("data-value"));  
};

_mail.onclick = function () {
    document.location.href = "mailto:" + _mail.getAttribute("data-value");  
    console.log("mailto:" + _mail.getAttribute("data-value"));  
};

