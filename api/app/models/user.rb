class User < ApplicationRecord
    validates :discord_id, presence: true, uniqueness: true
end
