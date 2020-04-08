module Queries
    class UserExists < Queries::BaseQuery
      description 'check if a user exists'
      argument :discord_id, String, required: true  
      type Boolean, null: false
  
      def resolve(discord_id: nil)
        ::User.exists?(discord_id: discord_id)
      end
    end
end