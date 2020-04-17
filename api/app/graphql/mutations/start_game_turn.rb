module Mutations
    class StartGameTurn < BaseMutation
    
      description 'begins a new'
      argument :direction, Integer, required: false
      argument :location_x, Integer, required: true
      argument :location_y, Integer, required: true
      argument :discord_channel_id, String, required: true
  
      type Types::GameType
  
      def resolve(direction: nil, location_x: nil, location_y: nil, discord_channel_id: nil)

        game = Game.find_by(discord_channel_id: discord_channel_id)
        
        tile = Tile.new
        
        if direction.nil?
          tile = Tile.find_by(location_x: location_x, location_y: location_y)
        else
          if direction == 0
            tile = Tile.find_by(location_x: game.location_x, location_y: game.location_y+1)
          elsif direction == 1
            tile = Tile.find_by(location_x: game.location_x, location_y: game.location_y-1)
          elsif direction == 2
            tile = Tile.find_by(location_x: game.location_x+1, location_y: game.location_y)
          elsif direction == 3
            tile = Tile.find_by(location_x: game.location_x-1, location_y: game.location_y)
          else
            raise GraphQL::ExecutionError, "ERROR: Invalid Direction"
          end
        end

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