class Biome < ApplicationRecord
    has_many :biome_enemies
    has_many :enemies, through: :biome_enemies

    def pick_random_enemy
        enemyCount = self.enemies.count

        weights = self.biome_enemies.map(&:spawn_chance)

        total_weight = (weights.sum {|obj| obj})

        chance = rand(total_weight)

        index = 0
        sum = 0
        
        if self.biome_enemies[index].spawn_chance <= chance
            
            sum += self.biome_enemies[index].spawn_chance
            index += 1

            loop do
            
                if self.biome_enemies[index].spawn_chance + sum >= chance
                    break
                end 

                sum += self.biome_enemies[index].spawn_chance
                index += 1
            end

        else
            index = 0
        end


        #random_offset = rand(enemyCount)
        #random_enemy = self.enemies.offset(random_offset).first
  
        random_enemy = self.enemies[index]
    end
end
