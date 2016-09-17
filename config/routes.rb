Rails.application.routes.draw do
  get 'contact/index'

  get 'gallery/index'

  root 'gallery#index'
end
