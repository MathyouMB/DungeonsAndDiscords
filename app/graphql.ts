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

export const CREATEGAME =`
mutation createGame($discordId: String!, $discordChannelId: String!) {
    createGame(
      discordId: $discordId,
      discordChannelId: $discordChannelId
    ) {
      id
      locationX
      locationY
      biome{
        id
        name
      }
    }
  }
  
`

export const STARTGAME = `
mutation startGameTurn($locationX: Int!, $locationY: Int!, $discordChannelId: String!) {
    startGameTurn(
      locationX: $locationX,
      locationY: $locationY,
      discordChannelId: $discordChannelId
    ) {
      id
      locationX
      locationY
      biome{
        name
      }
      currentPlayer{
        health
        maxHealth
        magic
        maxMagic
        abilities{
          name
          damage  
        }
      }
      currentEnemy{
        name
        health
        maxHealth
        abilities{
          name
          damage
          magicCost
        }
        items{
          name
        }
      }
    }
  }
  
  `