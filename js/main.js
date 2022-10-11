var pola = ['pole1', 'pole2', 'pole3', 'pole4', 'pole5', 'pole6', 'pole7', 'pole8', 'pole9']
var tura = 0

pola[0] = '-'
pola[1] = '-'
pola[2] = '-'
pola[3] = '-'
pola[4] = '-'
pola[5] = '-'
pola[6] = '-'
pola[7] = '-'
pola[8] = '-'

function zamiana1() {
	sprawdz_gre()
	if (pola[0] == '-' && tura % 2 == 0) {
		document.getElementById('trd1').innerHTML = '<div>X</div>'
		pola[0] = 'X'
		tura++
	} else if (pola[0] == '-' && tura % 2 == 1) {
		document.getElementById('trd1').innerHTML = '<div>O</div>'
		pola[0] = 'O'
		tura++
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function zamiana2() {
	sprawdz_gre()
	if (pola[1] == '-' && tura % 2 == 0) {
		document.getElementById('trd2').innerHTML = '<div>X</div>'
		pola[1] = 'X'
		tura++
	} else if (pola[1] == '-' && tura % 2 == 1) {
		document.getElementById('trd2').innerHTML = '<div>O</div>'
		pola[1] = 'O'
		tura++
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function zamiana3() {
	sprawdz_gre()
	if (pola[2] == '-' && tura % 2 == 0) {
		document.getElementById('trd3').innerHTML = '<div>X</div>'
		pola[2] = 'X'
		tura++
	} else if (pola[2] == '-' && tura % 2 == 1) {
		document.getElementById('trd3').innerHTML = '<div>O</div>'
		pola[2] = 'O'
		tura++
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function zamiana4() {
	sprawdz_gre()
	if (pola[3] == '-' && tura % 2 == 0) {
		document.getElementById('trd4').innerHTML = '<div>X</div>'
		pola[3] = 'X'
		tura++
	} else if (pola[3] == '-' && tura % 2 == 1) {
		document.getElementById('trd4').innerHTML = '<div>O</div>'
		pola[3] = 'O'
		tura++
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function zamiana5() {
	sprawdz_gre()
	if (pola[4] == '-' && tura % 2 == 0) {
		document.getElementById('trd5').innerHTML = '<div>X</div>'
		pola[4] = 'X'
		tura++
	} else if (pola[4] == '-' && tura % 2 == 1) {
		document.getElementById('trd5').innerHTML = '<div>O</div>'
		pola[4] = 'O'
		tura++
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function zamiana6() {
	sprawdz_gre()
	if (pola[5] == '-' && tura % 2 == 0) {
		document.getElementById('trd6').innerHTML = '<div>X</div>'
		pola[5] = 'X'
		tura++
	} else if (pola[5] == '-' && tura % 2 == 1) {
		document.getElementById('trd6').innerHTML = '<div>O</div>'
		pola[5] = 'O'
		tura++
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function zamiana7() {
	sprawdz_gre()
	if (pola[6] == '-' && tura % 2 == 0) {
		document.getElementById('trd7').innerHTML = '<div>X</div>'
		pola[6] = 'X'
		tura++
	} else if (pola[6] == '-' && tura % 2 == 1) {
		document.getElementById('trd7').innerHTML = '<div>O</div>'
		pola[6] = 'O'
		tura++
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function zamiana8() {
	sprawdz_gre()
	if (pola[7] == '-' && tura % 2 == 0) {
		document.getElementById('trd8').innerHTML = '<div>X</div>'
		pola[7] = 'X'
		tura++
		sprawdz_gre()
	} else if (pola[7] == '-' && tura % 2 == 1) {
		document.getElementById('trd8').innerHTML = '<div>O</div>'
		pola[7] = 'O'
		tura++
		sprawdz_gre()
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function zamiana9() {
	if (pola[8] == '-' && tura % 2 == 0) {
		document.getElementById('trd9').innerHTML = '<div>X</div>'
		pola[8] = 'X'
		tura++
		sprawdz_gre()
	} else if (pola[8] == '-' && tura % 2 == 1) {
		document.getElementById('trd9').innerHTML = '<div>O</div>'
		pola[8] = 'O'
		tura++
		sprawdz_gre()
	} else {
		alert('Miejsce jest już zajęte!')
	}
}

function sprawdz_gre() {
	sprawdzenie_x()
	sprawdzenie_y()
	sprawdzenie_remis()
}

/*Sprawdzenie wygranej X*/
function sprawdzenie_x() {
	if (pola[0] == 'X' && pola[1] == 'X' && pola[2] == 'X') {
		alert('koniec gry1')
	}
	if (pola[3] == 'X' && pola[4] == 'X' && pola[5] == 'X') {
		alert('koniec gry1')
	}
	if (pola[6] == 'X' && pola[7] == 'X' && pola[8] == 'X') {
		alert('koniec gry1')
	}
	if (pola[0] == 'X' && pola[3] == 'X' && pola[6] == 'X') {
		alert('koniec gry1')
	}
	if (pola[1] == 'X' && pola[4] == 'X' && pola[7] == 'X') {
		alert('koniec gry1')
	}
	if (pola[2] == 'X' && pola[5] == 'X' && pola[8] == 'X') {
		alert('koniec gry1')
	}
	if (pola[0] == 'X' && pola[4] == 'X' && pola[8] == 'X') {
		alert('koniec gry1')
	}
	if (pola[2] == 'X' && pola[4] == 'X' && pola[6] == 'X') {
		alert('koniec gry1')
	}
}

/*Sprawdzenie wygranej Y*/
function sprawdzenie_y() {
	if (pola[0] == 'O' && pola[1] == 'O' && pola[2] == 'O') {
		alert('koniec gry1')
	}
	if (pola[3] == 'O' && pola[4] == 'O' && pola[5] == 'O') {
		alert('koniec gry1')
	}
	if (pola[6] == 'O' && pola[7] == 'O' && pola[8] == 'O') {
		alert('koniec gry1')
	}
	if (pola[0] == 'O' && pola[3] == 'O' && pola[6] == 'O') {
		alert('koniec gry1')
	}
	if (pola[1] == 'O' && pola[4] == 'O' && pola[7] == 'O') {
		alert('koniec gry1')
	}
	if (pola[2] == 'O' && pola[5] == 'O' && pola[8] == 'O') {
		alert('koniec gry1')
	}
	if (pola[0] == 'O' && pola[4] == 'O' && pola[8] == 'O') {
		alert('koniec gry1')
	}
	if (pola[2] == 'O' && pola[4] == 'O' && pola[6] == 'O') {
		alert('koniec gry1')
	}
}

/*Sprawdzenie remisu*/
function sprawdzenie_remis() {
	if (tura == 8) {
		alert('koniec gry - remis!')
	}
}
