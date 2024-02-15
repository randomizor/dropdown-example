# frozen_string_literal: true

class DropdownMenuItemComponentPreview < ViewComponent::Preview
  # @param title
  # @param url
  # @param icon
  # @param style select { choices: [default, primary, secondary, warning, success] }
  def default(title: 'Test', url: nil, icon: 'cog', style: :default)
    render(DropdownMenuItemComponent.new(title:, url:, icon:, style:))
  end
end
