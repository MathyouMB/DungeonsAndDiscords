module Types
    class GameType < Types::BaseObject
      field :id, ID, null: false
      field :discord_channel_id, String, null: false
      field :owner, Types::UserType, null: false
      field :location_x, String, null: false
      field :location_y, String, null: false
      field :location, Types::TileType, null: false
      field :biome, Types::BiomeType, null: false
      field :currentEnemy, Types::CurrentEnemyType, null: true
      field :gameCharacters, [Types::GameCharacterType], null:true
      field :currentPlayer, Types::GameCharacterType, null:true
    end
end