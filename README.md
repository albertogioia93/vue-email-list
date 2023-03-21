Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

COME RISOLVO QUESTO ESERCIZIO:

- Creo un'istanza di Vue in main.js come da prassi.
- Dentro '<div id="app">' in index.html creo un UL con una sola LI.
- L'oggetto 'data()' ritorna una proprietà che chiamo con un nome inventato.
- Creo una funzione dove il metodo al suo interno lo uso per popolare la lista di indirizzi email.
- Nei 'methods', la funzione creata prima utilizza la parola chiave async per eseguire l'operazione di fetch in modo asincrono, attendendo la risposta prima di passare al prossimo elemento della lista.
- Utilizzo il metodo json() per estrarre i dati dalla risposta e aggiungere l'indirizzo email alla lista di indirizzi email. 
- Infine, utilizzo la direttiva v-for per ciclare sulla lista emails e visualizzarli all'interno di quel LI creato all'inizio.