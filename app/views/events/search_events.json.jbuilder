json.array!(@results) do |result|
  json.title        result['title']
  json.start_time   result['start_time']
  json.venue_address     result['venue_address']
  json.venue_url    result['venue_url']
  json.image        result['image']
  json.description  result['description']
end