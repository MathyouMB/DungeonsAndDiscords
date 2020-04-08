class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :discord_id
      t.string :discord_username
      t.string :discord_discriminator
      t.timestamps
    end
  end
end
