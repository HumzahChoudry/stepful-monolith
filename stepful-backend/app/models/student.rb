class Student < ApplicationRecord
    has_many :appointments
    has_many :coaches, through: :appointments, foreign_key: "coach_id"

    validates :name, presence: true
end
