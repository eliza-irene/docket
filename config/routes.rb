Rails.application.routes.draw do

  root 'application#index'

  get "*path.html" => "application#index", :layout => 0
  get "*path" => "application#index"
  
end