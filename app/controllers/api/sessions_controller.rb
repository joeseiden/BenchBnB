class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      render json: "Welcome back #{user.username}"
    else
      render json: "Incorrect username/password"
    end
  end

  def destroy
    if current_user
      logout!
      render "api/users/show"
    else
      render json: "No current user", status: 404
    end
  end

end
