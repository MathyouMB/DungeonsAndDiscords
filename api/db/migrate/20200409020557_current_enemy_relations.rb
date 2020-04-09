class CurrentEnemyRelations < ActiveRecord::Migration[5.1]
  def change
    add_reference :current_enemies, :game, foreign_key: true
    add_reference :current_enemies, :enemy, foreign_key: true
  end
end
