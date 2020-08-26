Rails.application.routes.draw do
  get 'home/espera'
  get 'home/index'
  get 'fases/canvi_fase'
  resources :estats
  resources :missatges
  devise_for :users
  root to: 'home#espera'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
