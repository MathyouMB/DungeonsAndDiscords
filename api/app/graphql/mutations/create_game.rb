module Mutations
    class CreateGame < BaseMutation
    
      description 'Create a new Game'
      argument :discord_id, String, required: true
      argument :discord_channel_id, String, required: true
  
      type Types::GameType
  
      def resolve(discord_id: nil, discord_channel_id: nil)

        user = User.find_by(discord_id: discord_id)

        tile = Tile.first

        game = Game.create!(
            discord_channel_id: discord_channel_id,
            owner_id: user.id,
            tile_id: tile.id
        )

        game.save

        user_character = user.characters.first

        character = GameCharacter.create!(
            health: user_character.max_health,
            magic: user_character.max_magic,
            game_id: game.id,
            character_id: user_character.id
        )
=begin
        character = GameCharacter.create!(
            health: user_character.max_health,
            magic: user_character.max_magic,
            game_id: game.id,
            character_id: user_character.id
        )
=end
        #character.next_player_id = character.id
        #character.previous_player_id = character.id
        
        game.current_player_id = character.id  
        game.save
        character.save

        raise GraphQL::ExecutionError, game.errors.full_messages.join(", ") unless game.errors.empty?

        game
        
      end
    end
  end