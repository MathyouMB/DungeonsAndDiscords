import { Client } from 'discord.js';
import { ChannelController } from "./controllers/channelController"
import { CommandController } from "./controllers/commandController"

const client: Client = new Client();
const channelController = new ChannelController();
const commandController = new CommandController();

client.on('ready', () => {
    console.log(`Client is logged in as ${client.user!.tag} and ready!`);
    //console.log(client.channels);

});
/*
client.on('channelCreate', channel => {
    console.log(channel);
});
*/
client.on('message', msg => {
    if(channelController.isGameInput(msg)){
        commandController.processCommand(msg, client);
    }
    //console.log(msg)
});

client.on('messageReactionAdd', (messageReaction, user) => {
    console.log(messageReaction);
    console.log(user)   
});   


client.login('Njk1ODQyNTkxMTM2Mjg0Njky.XogEDQ.9Wmd0DYTW5TVF0GQBkpgPw9TVVw');