class Api::DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def create
    #debugger
    @dish = Dish.new(dish_params)
    image_params.each { |image_url| @dish.images.build(url: image_url) }
    # @dish.images.build(image_params)
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
    params.require(:dish).require(:image_urls)
  end
end
