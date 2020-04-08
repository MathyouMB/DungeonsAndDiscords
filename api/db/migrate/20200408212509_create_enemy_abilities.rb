class CreateEnemyAbilities < ActiveRecord::Migration[5.1]
  def change
    create_table :enemy_abilities do |t|
      t.float :use_probability

      t.timestamps
    end
  end
end
