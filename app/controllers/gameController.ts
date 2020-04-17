import { Message, Client, Channel } from "discord.js";
import { request } from 'graphql-request'
import { ENDPOINT, STARTGAME, PLAYEROPTION, ENEMYOPTION,TRAVEL } from "../graphql"
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

  public travel = async (msg:Message, client:Client) => {

    const variables = {
        direction: parseInt(this.getTravelDirection(msg)),
        discordChannelId: msg.channel.id,
        locationX: 0,
        locationY: 0,
    }

    try {
        const data = await request(ENDPOINT, TRAVEL, variables)
        console.log(data.startGameTurn);
   
        viewController.enemyAppeared(msg,client,data.startGameTurn)
        viewController.displayPlayerOptions(msg,client,data.startGameTurn)
        
    } catch (e) {
        msg.reply('Failed to start game via API');
    }

  }

  public getTravelDirection = (msg:Message) =>{
    let content = msg.content;
    let parsed = content.split(" ")
    return parsed[1];
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
        if(data.playerOption.game.currentEnemy.health > 0){
          this.enemyAction(msg, client);
        }else{
          viewController.displayDirectionPrompt(msg,client);
        }

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

