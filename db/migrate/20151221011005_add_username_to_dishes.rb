class AddUsernameToDishes < ActiveRecord::Migration
  def change
    add_column :dishes, :username, :string
  end
end
