import { Message, Client, Channel } from "discord.js";
import { request } from 'graphql-request'
import { ENDPOINT, STARTGAME, PLAYEROPTION, ENEMYOPTION } from "../graphql"

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
          color: 3066993,
          type: 'rich',
          description: 'Prepare to battle!',
          title: turnData.currentEnemy.name +" appeared...",
          url: "http://linktowikidescriptingthemonsteranditsatatcked.com",
          thumbnail: {
            url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-green-forest-square-bill-wakeley.jpg',
          },

          fields: [{
              name: "Health",
              value: "Health: "+turnData.currentEnemy.health+"/"+turnData.currentEnemy.maxHealth
            }
          ],
          files: ["https://i.imgur.com/XxxXxXX.jpg"],
          image: {
              url:"https://i.imgur.com/HeqWmjq.png"
          },
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Example"
          }
        }
      });

      let d = `Character - HP: **`+turnData.currentPlayer.health+`/`+turnData.currentPlayer.maxHealth+`**\n
      Type **!action** <option> to attack the enemy.\n`;

      for(let i=0; i<turnData.currentPlayer.abilities.length;i++){
        d+='\n' +
        '**['+i+']:** '+turnData.currentPlayer.abilities[i].name+' - Damage:** '+turnData.currentPlayer.abilities[i].damage+' HP**  - Mana:** '+turnData.currentPlayer.abilities[i].magicCost+' MP**\n'
      }

      msg.channel.send("<@!"+turnData.currentPlayer.user.discordId+"> **Your Turn has Begun** ",
        {   
          embed: {
            title:"Select an option:",
            color: 3447003,
            description: d,
            thumbnail: {
              url: 'https://cdn3.iconfinder.com/data/icons/unigrid-flat-military/90/002_022_military_battle_attack_swords-512.png',
            },
            image: {
              url:"https://i.imgur.com/EZlQ1Jl.png"
          },
          }
      });


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
        const data = await request(ENDPOINT, PLAYEROPTION, variables)
        console.log(data);
        msg.reply(data.playerOption.message )

        let turnData = data.playerOption.game

        if(data.playerOption.success){
          msg.channel.send({embed: {
            color: 3066993,
            type: 'rich',
            url: "http://linktowikidescriptingthemonsteranditsatatcked.com",
            thumbnail: {
              url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-green-forest-square-bill-wakeley.jpg',
            },
  
            fields: [{
                name: turnData.currentEnemy.name,
                value: "Health: "+turnData.currentEnemy.health+"/"+turnData.currentEnemy.maxHealth
              }
            ],
            files: ["https://i.imgur.com/XxxXxXX.jpg"],
            image: {
                url:"https://i.imgur.com/HeqWmjq.png"
            },
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Example"
            }
          }
        });
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
        const turnData = data.enemyOption.game;

        client.channels.get(msg.channel.id).send(data.enemyOption.message);

        let d = `Character - HP: **`+turnData.currentPlayer.health+`/`+turnData.currentPlayer.maxHealth+`**\n
      Type **!action** <option> to attack the enemy.\n`;

        for(let i=0; i<turnData.currentPlayer.abilities.length;i++){
          d+='\n' +
          '**['+i+']:** '+turnData.currentPlayer.abilities[i].name+' - Damage:** '+turnData.currentPlayer.abilities[i].damage+' HP**  - Mana:** '+turnData.currentPlayer.abilities[i].magicCost+' MP**\n'
        }

        console.log(turnData.currentPlayer);
        msg.channel.send("<@!"+turnData.currentPlayer.user.discordId+"> **Your Turn has Begun** ",
          {   
            embed: {
              title:"Select an option:",
              color: 3447003,
              description: d,
              thumbnail: {
                url: 'https://cdn3.iconfinder.com/data/icons/unigrid-flat-military/90/002_022_military_battle_attack_swords-512.png',
              },
              image: {
                url:"https://i.imgur.com/EZlQ1Jl.png"
            },
            }
        });

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

