class Biome < ApplicationRecord
    has_many :biome_enemies
    has_many :enemies, through: :biome_enemies
end
