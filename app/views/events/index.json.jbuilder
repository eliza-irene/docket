json.array!(@events) do |event|
  json.extract! event, :id, :title, :city_name, :start_time, :venue_name, :venue_url
  json.url event_url(event, format: :json)
end
