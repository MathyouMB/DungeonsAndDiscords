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
        imgurUrl
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
        imgurUrl
      }
      currentPlayer{
        health
        maxHealth
        magic
        maxMagic
        abilities{
          name
          damage  
          magicCost
        }
        user{
          discordId
        }
      }
      currentEnemy{
        name
        health
        maxHealth
        imgurUrl
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

export const TRAVEL = `
mutation startGameTurn($direction: Int!, $locationX: Int!, $locationY: Int!, $discordChannelId: String!) {
    startGameTurn(
      direction: $direction,
      locationX: $locationX,
      locationY: $locationY,
      discordChannelId: $discordChannelId
    ) {
      id
      locationX
      locationY
      biome{
        name
        imgurUrl
      }
      currentPlayer{
        health
        maxHealth
        magic
        maxMagic
        abilities{
          name
          damage  
          magicCost
        }
        user{
          discordId
        }
      }
      currentEnemy{
        name
        health
        maxHealth
        imgurUrl
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

  export const PLAYEROPTION = `
  mutation playerOption($option: Int!, $discordId: String!, $discordChannelId: String!) {
    playerOption(
      option: $option,
      discordId: $discordId,
      discordChannelId: $discordChannelId
    ) {
      success
      message
      game{
        id
        locationX
        locationY
        biome{
          name
          imgurUrl
        }
        currentPlayer{
          health
          maxHealth
          magic
          maxMagic
          nextPlayer{
            id
          }
          abilities{
            name
            damage  
          }
        }
        currentEnemy{
          name
          health
          maxHealth
          imgurUrl
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
  }
  `
export const ENEMYOPTION = `
mutation enemyOption($discordChannelId: String!) {
    enemyOption(
      discordChannelId: $discordChannelId
    ) {
      success
      message
      game{
        id
        locationX
        locationY
        biome{
          name
          imgurUrl
        }
        currentPlayer{
          health
          maxHealth
          magic
          maxMagic
          nextPlayer{
            id
          }
          abilities{
            id
            name
            damage  
            magicCost
          }
          user{
            discordId
          }
        }
        currentEnemy{
          name
          health
          maxHealth
          imgurUrl
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
  }
  
`