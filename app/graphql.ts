export const ENDPOINT = 'http://localhost:3000/graphql'

export const CREATEUSER =`
mutation createUser($discordId: String!, $discordUsername: String!, $discordDiscriminator: String! ) {
    createUser(
      discordId: $discordId,
      discordUsername: $discordUsername,
      discordDiscriminator:$discordDiscriminator
    ) {
      id
      discordId
      discordUsername
      discordDiscriminator
    }
}
`;
export const USER =`
query user($discordId: String!) {
    user(
      discordId: $discordId
    ){
      id
      discordId
      discordUsername
      discordDiscriminator
    }
} 
`;

export const USEREXISTS =`
query userExists($discordId: String!) {
    userExists(
      discordId: $discordId
    )
}  
`;