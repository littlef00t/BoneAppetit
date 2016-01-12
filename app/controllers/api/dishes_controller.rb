class Api::DishesController < ApplicationController
  before_action :require_logged_in!, only: [:create, :destroy]

  def index
    @dishes = Dish.all
  end

  def show

    @dish = Dish.includes(:comments).includes(:images).find(params[:id])

  end

  def create
    @dish = Dish.new(dish_params)
    image_params.each { |image_publicid| @dish.images.build(url: image_publicid) }
    @dish.user_id = current_user.id
    if @dish.save!
      render :show
    else
      flash[:errors] = @dish.errors.full_messages
    end
  end

  def destroy
    @dish = Dish.find(params[:id])
    @dish.destroy
    render :show
  end

  private
  def dish_params
    params.require(:dish).permit(:name, :description, :location, :pickup_time)
  end

  def image_params
    params.require(:dish).require(:image_publicids)
  end
end
