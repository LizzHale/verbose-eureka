class Photo < ApplicationRecord

  def large_location
    "#{location}1600/#{self.name}-1600.jpg"
  end

  def thumbnail_location
    "#{location}thumbnails/#{self.name}-thumbnail.jpg"
  end

  def location
    "https://s3.amazonaws.com/verbose-eureka-gallery/img/"
  end
end
