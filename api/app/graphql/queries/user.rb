module Queries
    class User < Queries::BaseQuery
      description 'Get User by discord id'
      argument :discord_id, String, required: true  
      type Types::UserType, null: true
  
      def resolve(discord_id:)
        ::User.find_by(discord_id: discord_id)
      end
    end
end