  
module Types
    class UserType < Types::BaseObject
      field :id, ID, null: false
      field :discordId, String, null: false
      field :discordUsername, String, null: false
      field :discordDiscriminator, String, null: false
      field :maxHealth, Float, null: false
      field :maxMagic, Float, null: false
    end
  end