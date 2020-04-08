class Item < ApplicationRecord
    has_many :item_abilities
    has_many :abilities, through: :item_abilities
end
