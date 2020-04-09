module Types
    class TileType < Types::BaseObject
      field :id, ID, null: false
      field :location_x, String, null: false
      field :location_y, String, null: false
      field :biome, Types::BiomeType, null: false
    end
end