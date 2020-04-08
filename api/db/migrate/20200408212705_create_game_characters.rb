class CreateGameCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :game_characters do |t|
      t.float :health
      t.float :magic

      t.timestamps
    end
  end
end
