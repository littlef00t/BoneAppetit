class Image < ActiveRecord::Base
  validates :url, :dish, presence: true
  belongs_to :dish
end
