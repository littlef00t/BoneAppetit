Rails.application.routes.draw do
  root to: "staticpages#root"
  resources :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]
  resources :dishes
end
