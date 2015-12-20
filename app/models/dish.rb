class Dish < ActiveRecord::Base
  belongs_to :user
  has_many :images
  has_many :comments

  validates :name, :description, :user_id, presence: true
  validates :description, length: { maximum: 140 }
end
