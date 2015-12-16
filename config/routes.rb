Rails.application.routes.draw do
  root to: "staticpages#root"
  resources :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: {format: :json} do
    resources :dishes, only: [:index, :create, :update, :destroy, :show]
  end
end
