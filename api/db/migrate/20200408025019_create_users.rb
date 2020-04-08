class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :discord_id
      t.string :discord_username
      t.string :discord_discriminator
      t.float :max_health
      t.float :max_magic

      t.timestamps
    end
  end
end
