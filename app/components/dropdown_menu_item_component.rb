# frozen_string_literal: true

class DropdownMenuItemComponent < ViewComponent::Base
  include HeroiconHelper

  attr_accessor :title, :url, :method, :icon, :style

  def initialize(title:, url: nil, method: :get, icon: nil, style: :default)
    @title = title
    @url = url
    @method = method
    @icon = icon
    @style = style
  end

  def text_colour
    case style
    when :primary
      'blue'
    when :secondary
      'stone'
    when :warning
      'red'
    when :success
      'green'
    else
      'gray'
    end
  end
end
