class Api::ResidentController < ApplicationController
  def index
    render json: Resident.all
  end

  def create
    resident = Resident.create(resident_params)
    render json: resident
  end

  def show
    resident = Resident.find(params[:id])
    render json: resident
  end

  def update
    resident = Resident.find(params[:id])
    resident.update_attributes(resident_params)
    render json: resident
  end

  def destroy
    Resident.destroy(params[:id])
    render json: { deleted: 'true' }
  end

  def resident_params
    params.require(:resident).permit(:id, :first_name, :last_name, :room_id)
  end
end