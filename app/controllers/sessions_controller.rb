class SessionsController < ApplicationController
  #before_action
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user.nil?
      flash.now[:errors] = ["Incorrect username and/or password"]
      render :new
    else
      sign_in(user)
      redirect_to users_url
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end

  def new

  end
end
