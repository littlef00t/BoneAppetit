json.array! @dishes do |dish|
  json.id dish.id
  json.name dish.name
  json.description dish.description
  json.location dish.location
  json.pickup_time dish.pickup_time
  json.images dish.images
  json.comments dish.comments
  json.user_id dish.user_id
  json.username dish.user.username
end
