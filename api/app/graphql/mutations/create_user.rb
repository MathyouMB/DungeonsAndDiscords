module Mutations
    class CreateUser < BaseMutation
    
      description 'Create a new User'
      argument :discord_id, String, required: true
      argument :discord_username, String, required: true
      argument :discord_discriminator, String, required: true
  
      type Types::UserType
  
      def resolve(discord_id: nil, discord_username: nil, discord_discriminator: nil)

        user = User.create(
          discord_id: discord_id,
          discord_username: discord_username,
          discord_discriminator: discord_discriminator,
        )

        c = Character.create(
          max_health: 10.0,
          max_magic: 10.0,
          user_id: user.id
        )

        i = Item.find_by(name: "Sword")

        CharacterItem.create(
          character_id: c.id,
          item_id: i.id
        )

        raise GraphQL::ExecutionError, user.errors.full_messages.join(", ") unless user.errors.empty?

        user
        
      end
    end
  end