import { COMMANDCHAR } from "../header"
import { Message } from "discord.js";

export class ChannelController {

    public isGameInput(msg:Message):Boolean
    {
        if(this.isCommand(msg) && this.isInGameChannel(msg)){
            return true;
        }
    
        return false;
    }
    
    public isInGameChannel(msg:Message):Boolean
    {
    /*
        for(let i =0; i<header.channelTypes.length; i++){
            if(msg.channel.name.indexOf(header.channelTypes[i])!= -1){
                return true;
            }
        }
    */
        return true;
    }
    
    public isCommand(msg:Message) : Boolean
    {
        if(msg.content.indexOf(COMMANDCHAR) == 0){
            return true;
        }
    
        return false;
    }
    
}

