Rails.application.routes.draw do
  root to: "staticpages#root"
  resources :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy, :show]

  namespace :api, defaults: {format: :json} do
    resources :dishes, only: [:index, :create, :update, :destroy, :show]
    resources :images, only: [:create, :index, :destroy]
    resources :comments, only: [:show, :create, :destroy, :update, :index]
  end
end
