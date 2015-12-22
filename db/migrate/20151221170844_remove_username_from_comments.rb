class RemoveUsernameFromComments < ActiveRecord::Migration
  def change
    remove_column :comments, :username
    remove_column :dishes, :username
  end
end
