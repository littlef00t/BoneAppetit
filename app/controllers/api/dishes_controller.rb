class Api::DishesController < ApplicationController
  before_action :require_logged_in!, only: [:create, :destroy]

  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
    # image_params.each { |image_publicid| @dish.images.build(url: image_publicid) }
    # @dish.save!
  end

  def create
    # debugger
    @dish = Dish.new(dish_params)
    image_params.each { |image_publicid| @dish.images.build(url: image_publicid) }
    @dish.user_id = current_user.id
    @dish.save!
    render :show
  end

  def destroy
    @dish = Dish.find(params[:id])
    @dish.destroy
    render :show
  end

  private
  def dish_params
    params.require(:dish).permit(:name, :description)
  end

  def image_params
    params.require(:dish).require(:image_publicids)
  end
end
