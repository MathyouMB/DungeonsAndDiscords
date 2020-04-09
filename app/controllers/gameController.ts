import { Message, Client, Channel } from "discord.js";
import { request } from 'graphql-request'
import { ENDPOINT, STARTGAME } from "../graphql"

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
        const turnData = data.startGameTurn;
        //msg.channel.send("My Bot's message", {files: ["https://i.imgur.com/XxxXxXX.jpg"]});
      
        msg.channel.send({embed: {
          color: 3447003,
          title: turnData.currentEnemy.name +" appeared...",
          url: "http://linktowikidescriptingthemonsteranditsatatcked.com",
          fields: [{
              name: "Health",
              value: "Health: "+turnData.currentEnemy.health+"/"+turnData.currentEnemy.maxHealth
            }
          ],
          files: ["https://i.imgur.com/XxxXxXX.jpg"],
          image: {
              url:"http://i.imgur.com/yVpymuV.png"
          },
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Example"
          }
        }
      });

    } catch (e) {
        msg.reply('Failed to start game via API');
    }

  }
    
}

