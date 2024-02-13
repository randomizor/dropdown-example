# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  attr_accessor :title, :type, :style

  def initialize(title:, type: :button, style: :default)
    @title = title
    @type = type
    @style = style
  end

  def background_colour
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
