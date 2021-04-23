const { Client, Intents, Collection } = require('discord.js');

const { token } = require('./config.json')

const glob = require('glob')

const { promisify } = require('util');

const globPromise = promisify(glob);

const client = new Client({
    ws: {
        Intents: Intents.ALL
    }
});

client.commands = new Collection();
client.events = new Collection();
client.categories = new Set();

;(async() => {
 
 const eventFiles = await globPromise(`${__dirname}/events/**/*.js`);
 const commandFiles = await globPromise(`${__dirname}/commands/**/*.js`);
 console.log(`[Logs de comandos por consola] ${commandFiles.length} comandos han sido cargados!`)
    eventFiles.map((value) => {
        const file = require(value);
        client.events.set(file.name, file);
        client.on(file.name, file.run.bind(null, client));
    });
    commandFiles.map((value) => {
        const file = require(value);
        client.commands.set(file.name, file);
        client.categories.add(file.category)
    });
})();

client.login(token)