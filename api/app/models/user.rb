class User < ApplicationRecord
    validates :discord_id, presence: true, uniqueness: true

    has_many :characters
    has_many :games
end
