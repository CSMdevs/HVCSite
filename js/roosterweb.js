function roosterWeb() {
    url = 'http://www.hvc.nl/roosterweb/roosterS.php?q=' + document.getElementById("leerlingNummer").value
    window.open(url, '_blank');
}