module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :create_game, mutation: Mutations::CreateGame
    field :start_game_turn, mutation: Mutations::StartGameTurn
    field :player_option, mutation: Mutations::PlayerOption
    field :enemy_option, mutation: Mutations::EnemyOption
  end
end
