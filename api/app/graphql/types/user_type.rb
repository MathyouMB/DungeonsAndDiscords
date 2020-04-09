  
module Types
    class UserType < Types::BaseObject
      field :id, ID, null: false
      field :discordId, String, null: false
      field :discordUsername, String, null: false
      field :discordDiscriminator, String, null: false
      field :characters, [Types::CharacterType], null: true
      field :games, [Types::GameType], null: true
    end
end