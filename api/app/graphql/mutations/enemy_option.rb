module Mutations
    class EnemyOption < BaseMutation
    
      description 'mutation where enemy attacks player'
      argument :discord_channel_id, String, required: true
  
      type Types::GameResponseType
  
      def resolve(discord_channel_id: nil)
        
        succesful = true
        message = String.new
        game = Game.find_by(discord_channel_id: discord_channel_id)
        game_players = game.game_characters
        
        random_player = game_players.offset(rand(game_players.count)).first

        current_enemy = game.current_enemy

        random_ability = current_enemy.abilities.offset(rand(current_enemy.abilities.count)).first

        random_player.health -= random_ability.damage
        random_player.save

        game.current_player = game.game_characters.first
        game.save

        message = "**"+current_enemy.name+"** attacked <@!"+random_player.user.discord_id+"> with **"+random_ability.name+ "** and did **"+random_ability.damage.to_s+"** damage."
        OpenStruct.new("success" => succesful, "message" => message, "game" => game)
 
      end
    end
  end