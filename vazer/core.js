var extra_cards = document.getElementById("extra-cards");
var details_button = document.getElementById("details-button");
var details_text = document.getElementById("details-text");

extra_cards.style.display = "none";

details_button.onclick = function () {
    if (details_text.innerText == "HIDE DETAILS") {
        extra_cards.style.display = "none";
        details_text.innerText = "VIEW DETAILS";
    } else {
        extra_cards.style.display = "flex";
        details_text.innerText = "HIDE DETAILS";
    }

    console.log(extra_cards.getAttribute("style"));
};

var _call = document.getElementById("_call");
var _mail = document.getElementById("_mail");
var _website = document.getElementById("_website");
var _linkedin = document.getElementById("_linkedin");
var _twitter = document.getElementById("_twitter");
var _facebook = document.getElementById("_facebook");
var _googleplus = document.getElementById("_googleplus");
var _skype = document.getElementById("_skype");
var _whatsapp = document.getElementById("_whatsapp");
var _snapchat = document.getElementById("_snapchat");
var _instagram = document.getElementById("_instagram");
var _pinterest = document.getElementById("_pinterest");
var _youtube = document.getElementById("_youtube");
var _github = document.getElementById("_github");
var _navigate = document.getElementById("_navigate");
var _vcard = document.getElementById("_vcard");
var _sms = document.getElementById("_sms");

_call.onclick = function () {
    document.location.href = "tel:" + _call.getAttribute("data-value");
    console.log("tel:" + _call.getAttribute("data-value"));
};

_mail.onclick = function () {
    document.location.href = "mailto:" + _mail.getAttribute("data-value");
    console.log("mailto:" + _mail.getAttribute("data-value"));
};

_website.onclick = function () {
    window.open(_website.getAttribute("data-value"), "_blank");
    console.log("_website:" + _website.getAttribute("data-value"));
};

_linkedin.onclick = function () {
    window.open("https://www.linkedin.com/in/" + _linkedin.getAttribute("data-value"), "_blank");
    console.log("_linkedin:" + _linkedin.getAttribute("data-value"));
};

_twitter.onclick = function () {
    window.open("https://www.twitter.com/" + _twitter.getAttribute("data-value"), "_blank");
    console.log("_twitter:" + _twitter.getAttribute("data-value"));
};

_facebook.onclick = function () {
    window.open("https://www.facebook.com/" + _facebook.getAttribute("data-value"), "_blank");
    console.log("_facebook:" + _facebook.getAttribute("data-value"));
};

_googleplus.onclick = function () {
    window.open(_googleplus.getAttribute("data-value"), "_blank");
    console.log("_facebook:" + _googleplus.getAttribute("data-value"));
};

_skype.onclick = function () {
    document.location.href = "skype:" + _skype.getAttribute("data-value") + "?chat";
    console.log("_skype:" + _skype.getAttribute("data-value"));
};

_whatsapp.onclick = function () {
    window.open("https://api.whatsapp.com/send?phone=" + _whatsapp.getAttribute("data-value"), "_blank");
    console.log("_whatsapp:" + _whatsapp.getAttribute("data-value"));
};

_snapchat.onclick = function () {
    window.open("https://www.snapchat.com/add/" + _snapchat.getAttribute("data-value"), "_blank");
    console.log("_snapchat:" + _snapchat.getAttribute("data-value"));
};

_instagram.onclick = function () {
    window.open("https://www.instagram.com/" + _instagram.getAttribute("data-value"), "_blank");
    console.log("_instagram:" + _instagram.getAttribute("data-value"));
};

_pinterest.onclick = function () {
    window.open("https://www.pinterest.com/" + _pinterest.getAttribute("data-value"), "_blank");
    console.log("_pinterest:" + _pinterest.getAttribute("data-value"));
};

_youtube.onclick = function () {
    window.open(_youtube.getAttribute("data-value"), "_blank");
    console.log("_youtube:" + _youtube.getAttribute("data-value"));
};

_github.onclick = function () {
    window.open(_github.getAttribute("data-value"), "_blank");
    console.log("_github:" + _github.getAttribute("data-value"));
};

_navigate.onclick = function () {
    window.open("https://www.google.com/maps/place/" + _navigate.getAttribute("data-value"), "_blank");
    console.log("_navigate:" + _navigate.getAttribute("data-value"));
};

_sms.onclick = function () {
    document.location.href = "sms:" + _sms.getAttribute("data-value");
    console.log("_sms:" + _sms.getAttribute("data-value"));
};

_vcard.onclick = function () {
    var _downloadlauncher = document.getElementById('_downloadlauncher');
    _downloadlauncher.href = buildCard("Vazer Rahmani");
    _downloadlauncher.click();
    console.log("Okay:" + _downloadlauncher.getAttribute("href"));
};

var textFile = null,
    buildCard = function (text) {
        var data = new Blob([text], {
            type: 'text/plain'
        });

        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
    };
