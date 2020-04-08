module Types
  class QueryType < Types::BaseObject
    field :user, resolver: Queries::User
    field :user_exists, resolver: Queries::UserExists
    field :users, resolver: Queries::Users
  end
end
