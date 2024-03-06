class CreateAppointments < ActiveRecord::Migration[7.1]
  def change
    create_table :appointments do |t|
      t.integer :coach_id, :null => false
      t.integer :student_id
      t.integer :score
      t.datetime :start_time, :null => false
      t.datetime :end_time

      t.timestamps
    end
  end
end
