Rails.application.routes.draw do

  

  match '/search', to: 'events#search_events', via: 'get'
  match '/signup', to: 'users#new', via: 'get'
  match '/signin', to: 'sessions#new', via: 'get'
  match '/signout', to: 'sessions#destroy', via: 'get'

  resources :sessions
  resources :tokens
  resources :events
  resources :free_times
  resources :users

  root 'application#index'

  get "*path.html" => "application#index", :layout => 0
  get "*path" => "application#index"
  
end