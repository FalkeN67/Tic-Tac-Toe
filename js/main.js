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
