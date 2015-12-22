json.array! @comments do |comment|
  json.user_id comment.user_id
  json.dish_id comment.dish_id
  json.body comment.body
  json.username comment.user.username
end
