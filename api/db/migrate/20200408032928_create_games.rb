class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :discord_channel_id

      t.timestamps
    end
  end
end
