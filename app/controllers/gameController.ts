import { Message, Client, Channel } from "discord.js";

export class GameController {

  public createGame = async (msg:Message, client:Client, channel:Channel) => {
        setTimeout(function(){
            console.log("creating game...")
        }, 2000);
  }
    
}

