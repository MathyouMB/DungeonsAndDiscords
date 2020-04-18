class CurrentEnemy < ApplicationRecord
    belongs_to :game
    belongs_to :enemy
    has_many :abilities, through: :enemy
    has_many :items, through: :enemy

    def name
        self.enemy.name
    end
    
    def imgur_url
        self.enemy.imgur_url
    end

    def max_health
        self.enemy.max_health
    end

end
