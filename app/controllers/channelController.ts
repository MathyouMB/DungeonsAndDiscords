import { COMMANDCHAR, channelTypes } from "../header"
import { Message, Client, Channel, DiscordAPIError } from "discord.js";
import { request } from 'graphql-request'
import { ENDPOINT, CREATEGAME } from "../graphql"

export class ChannelController {

    public createGameChannel = async (msg:Message, client:Client) =>{
        
        let channel =  null;
        channel = await msg.guild.createChannel("game-" + msg.author.username, "text", null, null);

        const variables = {
            discordId: msg.author.id,
            discordChannelId: channel.id,
        }

        console.log(variables)

        try {
            const data = await request(ENDPOINT, CREATEGAME, variables)
            console.log(data.createGame);
        } catch (e) {
            msg.reply('Failed to create Channel on API');
        }
     
        return channel;
    }

    public isGameInput(msg:Message):boolean
    {
        if(this.isCommand(msg) && this.isInGameChannel(msg)){
            return true;
        }
    
        return false;
    }
    
    public isInGameChannel(msg:Message):boolean
    {
        return true;
        /*
        for(let i =0; i<channelTypes.length; i++){
            if(msg.channel.name.indexOf(channelTypes[i])!= -1){
                return true;
            }
        }

        return false;
        */
    }
    
    public isCommand(msg:Message): boolean
    {
        if(msg.content.indexOf(COMMANDCHAR) == 0){
            return true;
        }
    
        return false;
    }
    
}

