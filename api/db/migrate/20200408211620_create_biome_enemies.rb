class CreateBiomeEnemies < ActiveRecord::Migration[5.1]
  def change
    create_table :biome_enemies do |t|
      t.float :spawn_chance

      t.timestamps
    end
  end
end
