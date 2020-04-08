import { COMMANDCHAR, STARTCOMMAND, PARTYINVITECOMMAND, PARTYACCEPTCOMMAND, PLAYCOMMAND, LEAVECOMMAND } from "../header"
import { Message, Client, Channel } from "discord.js"
import { UserController } from "./userController"
import { PartyController } from "./partyController"
import { GameController } from "./gameController"
import { ChannelController } from "./channelController"

const userController = new UserController();
const partyController = new PartyController();
const gameController = new GameController();
const channelController = new ChannelController();

export class CommandController {

    public processCommand = async (msg:Message, client:Client) => {
        if(this.isStartCommand(msg)){
            userController.createUser(msg, client)
        }
    
        if(this.isInviteCommand(msg)){
            if(partyController.isValidInvite(msg,client)){
                msg.reply("Valid Invite");
            }else{
                msg.reply("Invalid Invite");
            }
        }

        if(this.isAcceptCommand(msg)){
            msg.reply("Accepted");
        }

        if(this.isPlayCommand(msg)){
            
            msg.reply("Creating Game Channel... ");

            try {
                
                let createdChannel = await channelController.createGameChannel(msg, client);
                
                createdChannel.overwritePermissions(msg.author, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    READ_MESSAGE_HISTORY: true,
                });

                client.channels.get(createdChannel.id).send('<@!'+msg.author.id+'> Welcome to Dungeons and Discords. Type !begin to start the game'); // ignore this error, this works fine

                //console.log(createdChannel);

            } catch (e) {
                console.error(e);
            }
            
        }

        if(this.isLeaveCommand(msg)){
            msg.reply("Left current game");
        }
    }

    public isStartCommand(msg:Message): boolean
   {
  
        if(msg.content.indexOf(STARTCOMMAND) == COMMANDCHAR.length){
            return true;
        }

        return false;

    }

    public isInviteCommand(msg:Message): boolean
    {
    
        if(msg.content.indexOf(PARTYINVITECOMMAND) == COMMANDCHAR.length){
            return true;
        }

        return false;
    }
    
    public isAcceptCommand(msg:Message): boolean
    {
    
        if(msg.content.indexOf(PARTYACCEPTCOMMAND) == COMMANDCHAR.length){
            return true;
        }

        return false;
    }

    public isPlayCommand(msg:Message): boolean
    {
    
        if(msg.content.indexOf(PLAYCOMMAND) == COMMANDCHAR.length){
            return true;
        }

        return false;
    }

    public isLeaveCommand(msg:Message): boolean
    {
    
        if(msg.content.indexOf(LEAVECOMMAND) == COMMANDCHAR.length){
            return true;
        }

        return false;
    }
}

