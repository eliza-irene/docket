Rails.application.routes.draw do

  resources :tokens

  resources :events

  resources :free_times

  resources :users

  root 'application#index'

  get "*path.html" => "application#index", :layout => 0
  get "*path" => "application#index"
  
end