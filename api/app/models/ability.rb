class Ability < ApplicationRecord
    has_many :item_abilities
    has_many :items, through: :item_abilities

    has_many :enemy_abilities
    has_many :enemies, through: :enemy_abilities
end
