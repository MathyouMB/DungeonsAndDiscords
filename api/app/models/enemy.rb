class Enemy < ApplicationRecord
    has_many :biome_enemies
    has_many :biomes, through: :biome_enemies

    has_many :enemy_abilities
    has_many :abilities, through: :enemy_abilities

    has_many :enemy_items
    has_many :items, through: :enemy_items

end
