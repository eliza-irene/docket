json.array!(@free_times) do |free_time|
  json.extract! free_time, :id, :user_id, :start_datetime, :end_datetime
  json.url free_time_url(free_time, format: :json)
end
