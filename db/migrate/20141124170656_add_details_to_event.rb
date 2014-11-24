class AddDetailsToEvent < ActiveRecord::Migration
  def change
    add_column :events, :venue_address, :string
  end
end
