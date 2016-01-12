class AddColumnToDishes < ActiveRecord::Migration
  def change
    add_column :dishes, :location, :string
    add_column :dishes, :pickup_time, :string
  end
end
