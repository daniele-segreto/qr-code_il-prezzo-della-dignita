// Testo o URL che desideri convertire in codice QR
let testoCodiceQR = "https://bookabook.it/libro/il-prezzo-della-dignita";

// Crea un nuovo oggetto QRCode
let qrcode = new QRCode(document.getElementById("qrcode"), {
    text: testoCodiceQR,
    width: 685, // larghezza
    height: 685 // altezza
});