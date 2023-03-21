'use strict';

// collegamento globale al div con id=app del file index.html
const { createApp } = Vue

createApp({
    data() {
        return {
            // array vuoto che deve contenere le mail che si generano ogni volta
            emails: []
        }
    },
    created() {
        this.generateEmails();
    },
    methods: {
        async generateEmails() {
            for (let i = 0; i < 10; i++) {
                // utilizzo della API di Boolean per generare una email
                const response = await fetch('https://flynn.boolean.careers/exercises/api/random/mail');
                // metodo json per estrarre dati dalla risposta
                const data = await response.json();
                // aggiungo la risposta alla lista di indirizzi email
                this.emails.push(data.response);
            }
        }
    }
}).mount('#app');

