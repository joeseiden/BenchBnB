if current_user
  json.partial! 'api/users/user', user: @user
else
  json.null!
end
