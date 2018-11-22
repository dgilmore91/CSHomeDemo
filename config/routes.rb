Rails.application.routes.draw do
  root to: 'demo#index'
  namespace :api do
    resources :resident, :room, only: %i[index create show update destroy]
    get 'room/:id/residents', to: 'room#residents_for_room'
  end
end
