class Game < ApplicationRecord
    belongs_to :tile
    #belongs_to :user
    belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
    has_many :game_characters
    belongs_to :current_player, class_name: 'GameCharacter', foreign_key: 'current_player_id'
    has_many :characters, through: :game_characters
    has_one :current_enemy

    def location_x
        self.tile.location_x
    end

    def location_y
        self.tile.location_y
    end

    def location
        self.tile
    end

    def biome
        self.tile.biome
    end

    def clearCurrentEnemy
        if !(self.current_enemy.nil?)
            self.current_enemy.destroy
        end
    end

end
