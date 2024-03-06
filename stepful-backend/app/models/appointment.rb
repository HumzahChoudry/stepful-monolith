class Appointment < ApplicationRecord
    belongs_to :student, optional: true
    belongs_to :coach

    validates :coach, presence: true
    validates :start_time, presence: true
    before_validation :set_end_time, on: [ :create, :update ]

    validate :no_overlap, on: [ :create, :update ]

    def no_overlap
        overlap = coach.appointments.filter{|a| a.id != id}.any? do |a|
            (a.start_time..a.end_time).overlaps?(start_time..end_time)
        end
        self.errors.add(:start_time, "Overlaps with existing appointment!") if overlap
    end 

    def set_end_time
        self.end_time = start_time + 2.hours
    end
end
