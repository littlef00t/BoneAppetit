class Api::UsersController < ApplicationController
  def index
    @dishes = Dish.all
  end

end
