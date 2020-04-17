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
    })
  }

  public displayEnemy = async (msg:Message, client:Client, turnData:any) => {
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
    
}

