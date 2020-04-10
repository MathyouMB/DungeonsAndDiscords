class User < ApplicationRecord
    validates :discord_id, presence: true, uniqueness: true

    has_many :characters
    has_many :games, class_name: 'Game', foreign_key: 'owner_id'
end
