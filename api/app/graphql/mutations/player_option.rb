module Mutations
    class PlayerOption < BaseMutation
    
      description 'updates game based on user action'
      argument :option, Integer, required: true
      argument :discord_id, String, required: true
      argument :discord_channel_id, String, required: true
  
      type Types::GameResponseType
  
      def resolve(option: nil, discord_id: nil, discord_channel_id: nil)
        
        succesful = true
        message = String.new
        game = Game.find_by(discord_channel_id: discord_channel_id)
        player = game.current_player.user

        if (player.discord_id == discord_id) #if it is this users tern
            
            options = game.current_player.abilities

            if options[option].nil?
                succesful = false
                message = "This is not a valid turn option."
            else
                game.current_enemy.health -= options[option].damage
                game.current_enemy.save
                game.current_player = game.current_player.next_player
                game.save
                message = "Attacked **"+ game.current_enemy.name + "** with **" + options[option].name + "** and did **" + options[option].damage.to_s + "** damage."
            end
        else
            succesful = false
            message = "It is not currently your turn."
        end

        OpenStruct.new("success" => succesful, "message" => message, "game" => game)
 
      end
    end
  end