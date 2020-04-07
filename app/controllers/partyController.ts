import { COMMANDCHAR, PARTYINVITECOMMAND } from "../header"
import { Message, Client } from "discord.js";

export class PartyController {

  public isValidInvite = async (msg:Message, client:Client) => {

    let content = msg.content;
    let parsedContent = content.slice(content.indexOf(" ")+1,content.length);

    if(parsedContent != ''+COMMANDCHAR+PARTYINVITECOMMAND){
        console.log("Validate if user exists")
    }
  }
    
}

