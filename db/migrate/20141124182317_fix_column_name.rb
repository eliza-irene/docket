class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :events, :freetime_id, :user_id
  end
end
