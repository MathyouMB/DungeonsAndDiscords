class CreateTiles < ActiveRecord::Migration[5.1]
  def change
    create_table :tiles do |t|
      t.integer :location_x
      t.integer :location_y

      t.timestamps
    end
  end
end
