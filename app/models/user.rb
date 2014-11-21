require 'google/api_client'
require 'httparty'
require 'json'

class User < ActiveRecord::Base
  has_many :free_times
  has_one :token
  include HTTParty 
end
