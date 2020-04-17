import { Message, Client, Channel } from "discord.js";
import { request } from 'graphql-request'
import { ENDPOINT, STARTGAME, PLAYEROPTION, ENEMYOPTION } from "../graphql"
import { ViewController } from "./viewController"

const viewController = new ViewController();

export class GameController {

  public startGame = async (msg:Message, client:Client) => {
    
    const variables = {
        discordChannelId: msg.channel.id,
        locationX: 0,
        locationY: 0,
    }

    try {
        const data = await request(ENDPOINT, STARTGAME, variables)
        console.log(data.startGameTurn);
   
        viewController.enemyAppeared(msg,client,data.startGameTurn)
        viewController.displayPlayerOptions(msg,client,data.startGameTurn)
        
    } catch (e) {
        msg.reply('Failed to start game via API');
    }

  }

  public registerAction = async (msg:Message, client:Client) => {

    let option = this.getOptionFromMessage(msg);
    

    if(!isNaN(option)){
      const variables = { 
        option: option,
        discordId: msg.author.id,
        discordChannelId: msg.channel.id,
      }

      try {
        const data = await request(ENDPOINT, PLAYEROPTION, variables);
        console.log(data);
        
        viewController.displayPlayerAttack(msg, data.playerOption.message);

        if(data.playerOption.success){
          viewController.displayEnemy(msg, client, data.playerOption.game);
        }

        this.enemyAction(msg, client);

      } catch (e) {
          msg.reply('Failed to register turn via API');
      }
    }

  }

  public enemyAction = async (msg:Message, client:Client) => {

      const variables = {
          discordChannelId: msg.channel.id,
      }
      

      try {
        
        const data = await request(ENDPOINT, ENEMYOPTION, variables)

        console.log(data);
        
        viewController.enemyAttackMessage(msg, client, data.enemyOption.message)
        viewController.displayPlayerOptions(msg, client, data.enemyOption.game)

      } catch (e) {
          msg.reply('Failed to register turn via API');
      }
    

  }

  public getOptionFromMessage(msg:Message)
  {

      let option = msg.content.split(" ")[1];
      return parseInt(option)
   }
    
}

