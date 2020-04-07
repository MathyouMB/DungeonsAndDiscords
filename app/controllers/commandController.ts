/*
const header = require('../header');
const userController = require('./userController');
const partyController = require('./partyController');

module.exports = {
    processCommand: processCommand
};

async function processCommand(msg, client){

    if(isStartCommand(msg) && !(await userController.userAccountExists(msg))){
        userController.createUser(msg, client)
    }

    if(isInviteCommand(msg)){
        console.log("test")
        if(partyController.isValidInvite(msg,client)){
            console.log("invited")
        }
    }
        

}

function isStartCommand(msg){
  
    if(msg.content.indexOf(header.STARTCOMMAND) == 1){
        return true;
    }

    return false;
}

function isInviteCommand(msg){
  
    if(msg.content.indexOf(header.PARTYINVITECOMMAND) == 1){
        return true;
    }

    return false;
}
*/

import { Message, Client } from "discord.js"


export class CommandController {

    public processCommand = async (msg:Message, client:Client) => {
        console.log(msg)
    }
        /*if(isStartCommand(msg) && !(await userController.userAccountExists(msg))){
            userController.createUser(msg, client)
        }
    
        if(isInviteCommand(msg)){
            console.log("test")
            if(partyController.isValidInvite(msg,client)){
                console.log("invited")
            }
        }
    }
    */
    
}

