class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :freetime_id
      t.string :title
      t.string :city_name
      t.datetime :start_time
      t.string :venue_name
      t.string :venue_url

      t.timestamps
    end
  end
end
