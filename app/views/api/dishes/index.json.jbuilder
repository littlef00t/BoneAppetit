json.array! @dishes do |dish|
  json.id dish.id
  json.name dish.name
  json.description dish.description
  json.images dish.images
end
