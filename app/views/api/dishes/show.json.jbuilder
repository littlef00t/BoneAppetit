# json.extract! @dish, :id, :name, :description, :images
json.id @dish.id
json.name @dish.name
json.description @dish.description
json.images @dish.images
json.user_id @dish.user_id
json.username @dish.user.username
json.comments do
  json.array! @dish.comments do |comment|
    json.user_id comment.user_id
    json.body comment.body
    json.username comment.user.username
  end
end
