class CreateEnemyItems < ActiveRecord::Migration[5.1]
  def change
    create_table :enemy_items do |t|
      t.float :drop_chance

      t.timestamps
    end
  end
end
