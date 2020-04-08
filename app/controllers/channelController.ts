import { COMMANDCHAR, channelTypes } from "../header"
import { Message, Client, Channel, DiscordAPIError } from "discord.js";

export class ChannelController {

    public createGameChannel = async (msg:Message, client:Client) =>{
        
        let test =  null;
        test = await msg.guild.createChannel("game-" + msg.author.username, "text", null, null);
        
        return test;
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

