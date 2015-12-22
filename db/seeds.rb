if User.find_by({username: 'demo_user'}).nil?
  User.create!(username: 'demo_user', password: "password")
end
