  
module Types
    class CharacterType < Types::BaseObject
      field :id, ID, null: false
      field :maxHealth, Float, null: false
      field :maxMagic, Float, null: false
      field :user, Types::UserType, null: true
      field :items, [Types::ItemType], null: true
      field :abilities, [Types::AbilityType], null: true
    end
end