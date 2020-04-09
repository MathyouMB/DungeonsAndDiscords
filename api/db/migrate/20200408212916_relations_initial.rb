class RelationsInitial < ActiveRecord::Migration[5.1]
  def change
    add_reference :biome_enemies, :biome, foreign_key: true
    add_reference :biome_enemies, :enemy, foreign_key: true

    add_reference :enemy_abilities, :enemy, foreign_key: true
    add_reference :enemy_abilities, :ability, foreign_key: true

    add_reference :item_abilities, :item, foreign_key: true
    add_reference :item_abilities, :ability, foreign_key: true

    add_reference :character_items, :character, foreign_key: true
    add_reference :character_items, :item, foreign_key: true

    add_reference :enemy_items, :enemy, foreign_key: true
    add_reference :enemy_items, :item, foreign_key: true

    add_reference :game_characters, :game, foreign_key: true
    add_reference :game_characters, :character, foreign_key: true

    add_reference :characters, :user, foreign_key: true

    add_reference :tiles, :biome, foreign_key: true

    add_reference :games, :tile, foreign_key: true

    add_reference :games, :user, foreign_key: true

  end
end
