/* Lista Cognomi

1 Chiedere all’utente il cognome

2 inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’ (quindi dobbiamo avere già definito questo array)

3 stampa la lista ordinata alfabeticamente (quindi devo averla ordinata prima di stamparla)

4 scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova */

var userSurname = prompt("Inserisci il tuo cognome") // 1

var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"] //2

surnameList.push(userSurname);

surnameList.sort()

console.log(surnameList)

for (var i = 0; i < surnameList.length; i++) {
  if (userSurname == surnameList[i]) {
    console.log(userSurname + " si è classificato:" + i );
  }

}
