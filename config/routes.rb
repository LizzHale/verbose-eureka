Rails.application.routes.draw do
  get 'contact', :to => 'contact#index', :as => 'contact'

  get '/', :to => 'gallery#index', :as => 'gallery'
end
