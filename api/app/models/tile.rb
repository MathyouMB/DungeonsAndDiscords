class Tile < ApplicationRecord
    has_many :games
    belongs_to :tile
end
