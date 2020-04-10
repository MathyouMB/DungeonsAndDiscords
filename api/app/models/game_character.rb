class GameCharacter < ApplicationRecord
    belongs_to :game, optional: true
    belongs_to :character

    validates :game_id, :presence => false

    has_one :game, class_name: 'Game', foreign_key: 'current_player_id', required: false
    
    has_one :next_player, class_name: 'GameCharacter', foreign_key: 'next_player_id', required: false
    belongs_to :previous_player, class_name: 'GameCharacter', foreign_key: 'previous_player_id', required: false

    has_many :items, through: :character
    has_many :abilities, through: :character

    has_one :user, through: :character

    def max_health
        self.character.max_health
    end

    def max_magic
        self.character.max_magic
    end

end
