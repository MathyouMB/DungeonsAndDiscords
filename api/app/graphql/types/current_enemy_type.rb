  
module Types
    class CurrentEnemyType < Types::BaseObject
      field :id, ID, null: false
      field :name, String, null: false
      field :imgurUrl, String, null: false
      field :health, Float, null: false
      field :maxHealth, Float, null: false
      field :items, [Types::ItemType], null: true
      field :abilities, [Types::AbilityType], null: true
    end
end