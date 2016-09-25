class GalleryController < ApplicationController
  def index
    @photos = Photo.all.sort_by &:created_at
  end
end
