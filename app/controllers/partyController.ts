/*
const header = require('../header');
const userController = require('./userController');

module.exports = {
    isValidInvite: isValidInvite
};

async function isValidInvite(msg, client){ // bool
    let content = msg.content;
    let parsedContent = content.slice(content.indexOf(" ")+1,content.length);

    if(parsedContent != ''+header.COMMANDCHAR+header.PARTYINVITECOMMAND){
        let user = await client.users.find("username", parsedContent);
        console.log(user);
        //Look up username
        //if username is a real person
            //return true
        //else
            //return false
    }

}
*/
