class CreateABilities < ActiveRecord::Migration[5.1]
  def change
    create_table :abilities do |t|
      t.string :name
      t.float :damage
      t.float :magic_cost

      t.timestamps
    end
  end
end
