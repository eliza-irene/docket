json.array!(@tokens) do |token|
  json.extract! token, :id, :user_id, :access_token, :refresh_token, :expires_at
  json.url token_url(token, format: :json)
end
