class CurrentEnemyRelations < ActiveRecord::Migration[5.1]
  def change
    add_reference :current_enemies, :game, foreign_key: true
    add_reference :current_enemies, :enemy, foreign_key: true

    add_reference :game_characters, :next_player, index: true
    add_reference :game_characters, :previous_player, index: true

    add_reference :games, :current_player, index: true
  end
end
