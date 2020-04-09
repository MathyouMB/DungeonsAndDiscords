class CreateCurrentEnemies < ActiveRecord::Migration[5.1]
  def change
    create_table :current_enemies do |t|
      t.float :health

      t.timestamps
    end
  end
end
