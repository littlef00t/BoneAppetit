# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
10.times do
  User.create!(username: Faker::Name.first_name, password: "password")
end

10.times do
  Dish.create!(name: Faker::SlackEmoji.food_and_drink, description: Faker::Lorem.word, user_id: rand(1..10))
end
