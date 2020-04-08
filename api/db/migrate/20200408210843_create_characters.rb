class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.float :max_health
      t.float :max_magic

      t.timestamps
    end
  end
end
