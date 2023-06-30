var container = document.querySelector(".ws-text-changer");
var conLen = container.innerHTML.length;
var nextStr = container.innerHTML.substring(0, container.innerHTML.length - 1);

function nextText(counter, acc, nextStrN, nextWord) {
    if (counter > acc) {
        setTimeout(function () {
            acc++;
            container.innerHTML = nextStrN;
            var next = nextStrN.substring(0, nextStrN.length - 1);
            nextText(counter, acc, next, nextWord);
        }, 80);
    } else {
        addText(nextWord, 0);
    }
}

function addText(strN, pos) {
    if (strN.length > pos) {
        setTimeout(function () {
            var zw = container.innerHTML;
            zw = zw + strN[pos];
            pos++;
            container.innerHTML = zw;
            addText(strN, pos);
        }, 80);
    } else {
        console.log("End");
    }
}

nextText(
    conLen,
    0,
    nextStr,
    "Hello Everybody Welcome to my page!"
);

function opencontact() {
    var contact = document.getElementById("mycontact");
    contact.style.display = "block";
}

function closecontact() {
    var contact = document.getElementById("mycontact");
    contact.style.display = "none";
}

function openPDFModalPDF(pdfPath) {
    var modalPDF = document.getElementById("pdfModalPDF");
    var pdfPreview = document.getElementById("pdfPreview");
    pdfPreview.src = pdfPath;
    modalPDF.style.display = "block";
}

function closePDFModalPDF() {
    var modalPDF = document.getElementById("pdfModalPDF");
    modalPDF.style.display = "none";
}

window.onclick = function (event) {
    var modalPDF = document.getElementById("pdfModalPDF");
    if (event.target === modalPDF) {
        modalPDF.style.display = "none";
    }
};

