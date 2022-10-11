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
	if (pola[0] == 'O' && pola[4] == 'O' && pola[8] == 'O') {
		alert('koniec gry1')
	}
	if (pola[2] == 'O' && pola[4] == 'O' && pola[6] == 'O') {
		alert('koniec gry1')
	}
}
