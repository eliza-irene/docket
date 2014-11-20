class CreateFreeTimes < ActiveRecord::Migration
  def change
    create_table :free_times do |t|
      t.integer :user_id
      t.datetime :start_datetime
      t.datetime :end_datetime

      t.timestamps
    end
  end
end
