class AddDetailsToFreeTime < ActiveRecord::Migration
  def change
    add_column :free_times, :title, :string
  end
end
