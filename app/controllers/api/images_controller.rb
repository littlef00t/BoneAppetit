class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
    render :index
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render :show
    else
    end
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
    render :show
  end

  def image_params
    params.require(:image).permit(:url)
  end

end
