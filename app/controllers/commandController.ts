import { PARTYINVITECOMMAND, STARTCOMMAND } from "../header"
import { Message, Client } from "discord.js"
import { UserController } from "./userController"
import { PartyController } from "./partyController"

const userController = new UserController();
const partyController = new PartyController();

export class CommandController {

    public processCommand = async (msg:Message, client:Client) => {
        if(this.isStartCommand(msg)){
            userController.createUser(msg, client)
        }
    
        if(this.isInviteCommand(msg)){
            if(partyController.isValidInvite(msg,client)){
                msg.reply("Valid Invite")
            }else{
                msg.reply("Invalid Invite")
            }
        }
    }

   public isStartCommand(msg:Message): boolean
   {
  
        if(msg.content.indexOf(STARTCOMMAND) == 1){
            return true;
        }

        return false;

    }

    public isInviteCommand(msg:Message): boolean
    {
    
        if(msg.content.indexOf(PARTYINVITECOMMAND) == 1){
            return true;
        }

        return false;
    }
    
}

