json.array!(@free_times) do |free_time|
  json.extract! free_time, :id, :user_id, :start_datetime, :end_datetime, :title
  json.url free_time_url(free_time, format: :json)
end

json.array!(@free_times) do |free_time|
  json.title         free_time['title']
  json.start         free_time['start_time']
  json.end           free_time['end_time']
  json.url    free_time['venue_url']
end