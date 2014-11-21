Rails.application.routes.draw do

  match '/search', to: 'events#search_events', via: 'get'

  resources :tokens

  resources :events

  resources :free_times

  resources :users

  root 'application#index'

  get "/auth/:provider/callback" => 'users#create'

  get "*path.html" => "application#index", :layout => 0
  get "*path" => "application#index"
  
end