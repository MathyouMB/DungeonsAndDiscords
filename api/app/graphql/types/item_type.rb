module Types
    class ItemType < Types::BaseObject
      field :id, ID, null: false
      field :name, String, null: false
      field :abilities, [Types::AbilityType], null: true
    end
end