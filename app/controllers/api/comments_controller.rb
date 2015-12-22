class Api::CommentsController < ApplicationController
  before_action :require_logged_in!, only: [:create, :destroy]

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    # @comment.username = current_user.username
    @comment.save!
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  def update

  end

  def comment_params
    params.require(:comment).permit(:body, :dish_id)
  end

end
