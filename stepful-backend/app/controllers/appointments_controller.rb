class AppointmentsController < ApplicationController
    before_action :set_appointment, only: %i[ show update destroy ]
  
    # GET /appointments
    def index
      @appointments = Appointment.where(student_id: nil).where("DATETIME(start_time) > ?", DateTime.now)
      render json: @appointments, :include => [:coach, :student]
    end
  
    # GET /appointments/1
    def show
      render json: @appointment
    end
  
    # POST /appointments
    def create
      @appointment = Appointment.new(appointment_params)

      if @appointment.save
        render json: @appointment, status: :created
      else
        render json: @appointment.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /appointments/1
    def update
      if @appointment.update(appointment_params)
        render json: @appointment
      else
        render json: @appointment, status: :unprocessable_entity
      end
    end
  
    # DELETE /appointments/1
    def destroy
      @appointment.destroy!
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_appointment
        @appointment = Appointment.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def appointment_params
        params.require(:appointment).permit(:coach_id, :student_id, :start_time)
      end
  end
  