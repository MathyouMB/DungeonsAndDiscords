const header = require('../header');
const Discord = require('discord.js');

module.exports = {
    createUser: createUser,
    userAccountExists: userAccountExists
};

//crud

async function createUser(msg, client){ // void
    
    //await create db request
    console.log("Create User")

    msg.channel.send({embed: {
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
}

//other

async function userAccountExists(msg){
    //msg.author.id
    return false;
}
