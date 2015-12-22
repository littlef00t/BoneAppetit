class Comment < ActiveRecord::Base
  validates :body, :user_id, :dish_id, presence: true
  belongs_to :user
  belongs_to :dish
end
