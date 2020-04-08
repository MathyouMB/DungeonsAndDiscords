class Character < ApplicationRecord

    belongs_to :user

    has_many :game_characters
    has_many :games, through: :game_characters

    has_many :character_items
    has_many :items, through: :character_items

    has_many :abilities, through: :items
    
end
