class Api::DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def create
    @dish = Dish.new(dish_params)
  end

  private
  def dish_params
    params.require(:dish).permit(:name, :description)
  end
end
