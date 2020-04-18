class CreateBiomes < ActiveRecord::Migration[5.1]
  def change
    create_table :biomes do |t|
      t.string :name
      t.string :imgur_url

      t.timestamps
    end
  end
end
