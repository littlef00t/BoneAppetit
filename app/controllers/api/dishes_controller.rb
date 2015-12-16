class Api::DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end
end
