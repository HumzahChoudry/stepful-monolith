class Coach < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :students, through: :appointments, foreign_key: "student_id"

    validates :name, presence: true
end
