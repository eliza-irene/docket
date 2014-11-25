json.array!(@events) do |event|
  json.title         event['title']
  json.start         event['start_time']
  json.end           event['end_time']
  json.venue_address event['venue_address']
  json.city_name     event['city_name']
  json.venue_url     event['venue_url']
  json.image         event['image']
  json.description   event['description']
end