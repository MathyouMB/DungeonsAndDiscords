module Mutations
    class StartGameTurn < BaseMutation
    
      description 'begins a new'
      argument :location_x, Integer, required: true
      argument :location_y, Integer, required: true
      argument :discord_channel_id, String, required: true
  
      type Types::GameType
  
      def resolve(location_x: nil, location_y: nil, discord_channel_id: nil)

        game = Game.find_by(discord_channel_id: discord_channel_id)

        tile = Tile.find_by(location_x: location_x, location_y: location_y)
        p(game)
        p(discord_channel_id)
        p(tile)
        game.tile_id = tile.id

        game.clearCurrentEnemy()
        game.current_player = game.game_characters.first
        
        enemy = tile.biome.pick_random_enemy

        game.current_enemy = CurrentEnemy.create(
            health: enemy.max_health,
            game_id: game.id,
            enemy_id: enemy.id
        )

        

        

        #raise GraphQL::ExecutionError, c.errors.full_messages.join(", ") unless c.errors.empty?

        game.save

        game
        
      end
    end
  end