  
module Types
    class BiomeType < Types::BaseObject
      field :id, ID, null: false
      field :name, String, null: false
      field :imgurUrl, String, null: false
    end
end