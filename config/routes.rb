Rails.application.routes.draw do
  mount Lookbook::Engine, at: "/lookbook"

  root "users#index"

  resources :users
end
