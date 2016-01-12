json.id @dish.id
json.name @dish.name
json.description @dish.description
json.location @dish.location
json.pickup_time @dish.pickup_time
json.images @dish.images
json.user_id @dish.user_id
json.username @dish.user.username
json.comments do
  json.array! @dish.comments do |comment|
    json.user_id comment.user_id
    json.body comment.body
    json.username comment.user.username
    json.id comment.id
  end
end
