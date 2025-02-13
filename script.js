function generateQR() {
    // Get the input value
    const data = document.getElementById('dataInput').value;
    
    // Clear previous QR code if any
    const qrOutput = document.getElementById('qrOutput');
    qrOutput.innerHTML = '';
    
    // Check if input is not empty
    if (data) {
        // Create new QR code
        new QRCode(qrOutput, {
            text: data,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
        });
    } else {
        alert('Please enter some text or URL');
    }
}