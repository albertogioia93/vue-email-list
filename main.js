'use strict';

// collegamento globale al div con id=app del file index.html
// const { createApp } = Vue

// createApp({
//     data() {
//         return {
//             // array vuoto che deve contenere le mail che si generano ogni volta
//             emails: []
//         }
//     },
//     created() {
//         this.generateEmails();
//     },
//     methods: {
//         async generateEmails() {
//             for (let i = 0; i < 10; i++) {
//                 // utilizzo della API di Boolean per generare una email
//                 const response = await fetch('https://flynn.boolean.careers/exercises/api/random/mail');
//                 // metodo json per estrarre dati dalla risposta
//                 const data = await response.json();
//                 // aggiungo la risposta alla lista di indirizzi email
//                 this.emails.push(data.response);
//             }
//         }
//     }
// }).mount('#app');


// JS BONUS COLLEGATO A PARTIRE DA RIGA 23 DI index.html

const { createApp } = Vue
createApp({
    data() {
        return {
            emails: [],
            // di partenza, la lista email già generata tutta prima di essere stampata è false
            emailsGenerated: false
        }
    },
    created() {
        this.generateEmails();
    },
    methods: {
        async generateEmails() {
            for (let i = 0; i < 10; i++) {
                const response = await fetch('https://flynn.boolean.careers/exercises/api/random/mail');
                const data = await response.json();
                this.emails.push(data.response);
            }
            // mi viene restituito true solo quando tutta la lista di 10 email viene generata attraverso il ciclo for
            this.emailsGenerated = true;
        }
    }
}).mount('#app');

