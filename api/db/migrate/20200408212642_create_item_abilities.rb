class CreateItemAbilities < ActiveRecord::Migration[5.1]
  def change
    create_table :item_abilities do |t|

      t.timestamps
    end
  end
end
