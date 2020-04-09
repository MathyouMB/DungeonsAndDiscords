class Biome < ApplicationRecord
    has_many :biome_enemies
    has_many :enemies, through: :biome_enemies

    def pick_random_enemy
        enemyCount = self.enemies.count
        random_offset = rand(enemyCount)
        random_enemy = self.enemies.offset(random_offset).first
    end
end
