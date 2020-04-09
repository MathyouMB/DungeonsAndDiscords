  
module Types
    class EnemyType < Types::BaseObject
      field :id, ID, null: false
      field :maxHealth, Float, null: false
      field :items, [Types::ItemType], null: true
      field :abilities, [Types::AbilityType], null: true
    end
end