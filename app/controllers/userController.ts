import { COMMANDCHAR, PLAYCOMMAND, channelTypes } from "../header"
import { Message, Client } from "discord.js";
import { request } from 'graphql-request'
import { ENDPOINT, CREATEUSER, USEREXISTS } from "../graphql"

export class UserController {

    public createUser = async (msg:Message, client:Client) => {

      const variables = {
        discordId: msg.author.id,
        discordUsername: msg.author.username,
        discordDiscriminator: msg.author.discriminator
      }

      try {

          const data = await request(ENDPOINT, CREATEUSER, variables)
          msg.reply('You have been registered. Type '+COMMANDCHAR+''+PLAYCOMMAND+' to join the game.');

      } catch (e) {
          msg.reply('You are already Registered');
      }
 
    }

    public userAccountExists = async (msg:Message) => {
      
      const variables = {
        discordId: msg.author.id
      }

      const data = await request(ENDPOINT, USEREXISTS, variables)

      return data.userExists;
    }
    
}

  //msg.channel.send("My Bot's message", {files: ["https://i.imgur.com/XxxXxXX.jpg"]});
      /*msg.channel.send({embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: "This is an embed",
          url: "http://google.com",
          description: "This is a test embed to showcase what they look like and what they can do.",
          fields: [{
              name: "Fields",
              value: "They can have different fields with small headlines."
            },
            {
              name: "Masked links",
              value: "You can put [masked links](http://google.com) inside of rich embeds."
            },
            {
              name: "Markdown",
              value: "You can put all the *usual* **__Markdown__** inside of them."
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
      */

