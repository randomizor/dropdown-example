# frozen_string_literal: true

class DropdownMenuComponent < ViewComponent::Base
  attr_accessor :hidden

  def initialize(hidden: true)
    @hidden = hidden
  end
end
