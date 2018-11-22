class Api::RoomController < ApplicationController
  def index
    render json: Room.all
  end

  def create
    room = Room.create(room_params)
    render json: room
  end

  def show
    room = Room.find(params[:id])
    render json: room
  end

  def update
    room = Room.find(params[:id])
    room.update_attributes(room_params)
    render json: room
  end

  def destroy
    Room.destroy(params[:id])
    render json: { deleted: 'true' }
  end

  def residents_for_room
    render json: Room.find(params[:id]).residents
  end

  def room_params
    params.require(:room).permit(:id, :name)
  end
end