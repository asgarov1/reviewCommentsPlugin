document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inOrdnungTestsGeschrieben')
        .addEventListener('click', () => copyText(inOrdnungTestsGeschrieben), false);

    document.getElementById('inOrdnungKeineTests')
        .addEventListener('click', () => copyText(inOrdnungKeineTests), false);

    document.getElementById('allesInOrdnung')
        .addEventListener('click', () => copyText(allesInOrdnung), false);
}, false);


function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(showToasterConfirmation);
}

function showToasterConfirmation() {
    let toast = document.getElementById('liveToast');
    toast.classList.add('show')
    setTimeout(() => toast.classList.remove('show'), 700);
}

// Answers

let inOrdnungTestsGeschrieben = 'Implementierung ist ordnungsgemäß umgesetzt. Änderungen entsprechen den Code-Richtlinien. Tests sind geschrieben';
let inOrdnungKeineTests = 'Implementierung ist ordnungsgemäß umgesetzt. Änderungen entsprechen den Code-Richtlinien. Tests Anpassungen sind nicht notwendig.'
let allesInOrdnung = "Sauber und nach Programmierrichtlinien umgesetzt - alles in Ordnung!";
