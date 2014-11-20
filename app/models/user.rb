class User < ActiveRecord::Base
  has_many :free_times
  has_one :token
end
