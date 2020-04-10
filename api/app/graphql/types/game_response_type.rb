module Types
    class GameResponseType < Types::BaseObject
      field :success, Boolean, null: false
      field :message, String, null:true
      field :game, Types::GameType, null:true
    end
end