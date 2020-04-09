module Mutations
    class CreateGame < BaseMutation
    
      description 'Create a new Game'
      argument :discord_id, String, required: true
      argument :discord_channel_id, String, required: true
  
      type Types::GameType
  
      def resolve(discord_id: nil, discord_channel_id: nil)

        user = User.find_by(discord_id: discord_id)

        tile = Tile.first

        game = Game.create(
            discord_channel_id: discord_channel_id,
            user_id: user.id,
            tile_id: tile.id
        )

        raise GraphQL::ExecutionError, game.errors.full_messages.join(", ") unless game.errors.empty?

        game
        
      end
    end
  end