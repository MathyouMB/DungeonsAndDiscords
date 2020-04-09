module Types
    class AbilityType < Types::BaseObject
        field :id, ID, null: false
        field :name, String, null: false
        field :damage, Float, null: false
        field :magicCost, Float, null: false
        field :items, [Types::ItemType], null: true
    end
end