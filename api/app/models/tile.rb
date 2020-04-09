class Tile < ApplicationRecord
    has_many :games
    belongs_to :biome
end
