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
          type: 'rich',
          description: 'Prepare to battle!',
          title: turnData.currentEnemy.name +" appeared...",
          url: "http://linktowikidescriptingthemonsteranditsatatcked.com",
          fields: [{
              name: "Health",
              value: "Health: "+turnData.currentEnemy.health+"/"+turnData.currentEnemy.maxHealth
            }
          ],
          files: ["https://i.imgur.com/XxxXxXX.jpg"],
          image: {
              url:"https://static.drips.pw/rotmg/wiki/Enemies/Ent%20God.png"
          },
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Example"
          }
        }
      });

      let d = "Type **!attack** <option> to attack the enemy.\n";

      for(let i=0; i<turnData.currentPlayer.abilities.length;i++){
        d+='\n' +
        '**['+i+']:** '+turnData.currentPlayer.abilities[i].name+' - Damage:** '+turnData.currentPlayer.abilities[i].damage+' HP**  - Mana:** '+turnData.currentPlayer.abilities[i].magicCost+' MP**\n'
        d+='\n';
      }

      msg.channel.send("<@!"+turnData.currentPlayer.user.discordId+"> **Your Turn has Begun** ",
        {   
          embed: {
            title:"Select an option:",
            color: 3447003,
            description: d
          }
      });

      /*[{
                name: "Health",
                value: "Health: "+turnData.currentEnemy.health+"/"+turnData.currentEnemy.maxHealth
            }]
            */

    } catch (e) {
        msg.reply('Failed to start game via API');
    }

  }
    
}

