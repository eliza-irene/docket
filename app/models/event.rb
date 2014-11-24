class Event < ActiveRecord::Base
  belongs_to :user
  

  @response = HTTParty.get("http://api.eventful.com/json/events/search?&location=Atlanta&app_key=b8hsZDFcNgvxWm4j")


end
