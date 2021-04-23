module.exports = {
    name: "ready",
    run: (client) => {
        console.log(`${client.user.username} ahora está conectado!`)
        
        client.user.setPresence({ activity: { name: '¡Un bot que reproduce Bad Apple!', type: 'WATCHING' }, status: 'dnd' })
    } 
};
