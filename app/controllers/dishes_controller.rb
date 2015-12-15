class DishesController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]

  def index
    @dishes = Dish.all
    render json: @dishes
  end

  def show
    @dish = Dish.find(params[:id])
    render json: @dish
  end

  def new
    @dish = Dish.new
    render :new
  end

  def create
    @dish = Dish.new(dish_params)
    @dish.user_id = current_user.id
    if @dish.save
      render json: @dish
    else
      flash.now[:errors] = @dish.errors.full_messages
      render :new
    end

  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    @dish = Dish.find(params[:id])
    if @dish.update_attributes(dish_params)
      render json: @dish
    else
      flash.now[:errors] = @dish.errors.full_messages
      render :edit
    end
  end

  def destroy
    @dish = Dish.find(params[:id])
    @dish.destroy
    redirect_to dishes_url
  end

  private
  def dish_params
    params.require(:dish).permit(:name, :description)
  end
end
