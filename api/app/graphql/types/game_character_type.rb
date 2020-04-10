module Types
    class GameCharacterType < Types::BaseObject
      field :id, ID, null: false
      field :health, Float, null: false
      field :magic, Float, null: false
      field :maxHealth, Float, null: false
      field :maxMagic, Float, null: false
      field :nextPlayer, Types::GameCharacterType, null: true
      field :previousPlayer, Types::GameCharacterType, null: true
      field :items, [Types::ItemType], null: true
      field :abilities, [Types::AbilityType], null: true
      field :user, Types::UserType, null: false
    end
end