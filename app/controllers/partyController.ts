import { COMMANDCHAR, PARTYINVITECOMMAND } from "../header";
import { Message, Client } from "discord.js";
import { UserController } from "./userController";

const userController = new UserController();

export class PartyController {
    private isValidInvite = async (msg: Message, client: Client) => {
        let content = msg.content;
        let parsedContent = content.slice(
            content.indexOf(" ") + 1,
            content.length
        );

        if (parsedContent != "" + COMMANDCHAR + PARTYINVITECOMMAND) {
            console.log("Validate if user exists");
            return false;
        }
        return true;
    };

    public inviteUser = async (msg: Message, client: Client) => {
        let content = msg.content;
        const userId = content.substring(
            content.indexOf("@"),
            content.indexOf(">")
        );

        if (this.isValidInvite(msg, client))
            if (userController.userAccountExistsId(userId)) {
                // inviteUser API call
                msg.channel.send("User has been invited");
            } else {
                msg.channel.send("User does not exist. Please register first.");
            }
    };
}
