import { Message, Client } from "discord.js";

export class ViewController {

  public enemyAppeared = async (msg:Message, client:Client, turnData:any) => {
    msg.channel.send({embed: {
        color: 3066993,
        type: 'rich',
        description: 'Prepare to battle!',
        title: turnData.currentEnemy.name +" appeared...",
        url: "http://linktowikidescriptingthemonsteranditsatatcked.com",
        thumbnail: {
          url: turnData.biome.imgurUrl,
        },

        fields: [{
            name: "Health",
            value: "Health: "+turnData.currentEnemy.health+"/"+turnData.currentEnemy.maxHealth
          }
        ],
        files: ["https://i.imgur.com/XxxXxXX.jpg"],
        image: {
            url: turnData.currentEnemy.imgurUrl
        },
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Example"
        }
      }
    })
  }

  public displayEnemy = async (msg:Message, client:Client, turnData:any) => {
    msg.channel.send({embed: {
        color: 3066993,
        type: 'rich',
        url: "http://linktowikidescriptingthemonsteranditsatatcked.com",
        thumbnail: {
          url: turnData.biome.imgurUrl,
        },

        fields: [{
            name: turnData.currentEnemy.name,
            value: "Health: "+turnData.currentEnemy.health+"/"+turnData.currentEnemy.maxHealth
          }
        ],
        files: ["https://i.imgur.com/XxxXxXX.jpg"],
        image: {
            url: turnData.currentEnemy.imgurUrl
        },
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Example"
        }
      }
    });
  }

  public enemyAttackMessage = async (msg:Message, client:Client, displayMessage:String) => {
    client.channels.get(msg.channel.id).send(displayMessage);
  }

  public displayPlayerAttack = async (msg:Message, message:String) => {
    msg.reply(message)
  }

  public displayPlayerOptions = async (msg:Message, client:Client, turnData:any) => {
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
  }

  public displayDirectionPrompt = async(msg:Message, client:Client) =>{
        let m = `
        Type **!travel** <option> to pick a direction to walk. \n
        **[0]** - North \n
        **[1]** - South \n
        **[2]** - East \n
        **[3]** - West 
        `;

        msg.channel.send(
          {   
            embed: {
              title:"Select a direction:",
              color: 3447003,
              description: m,
              thumbnail: {
                url: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/compass-icon.png',
              }
            }
        });
  }
  
    
}

