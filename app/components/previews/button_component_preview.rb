class ButtonComponentPreview < ViewComponent::Preview
  # @param title
  # @param style select { choices: [default, primary, secondary, warning, success] }

  def default(title: "Example", style: :default)
    render(ButtonComponent.new(title:, style:))
  end

  def primary(title: "Example", style: :primary)
    render(ButtonComponent.new(title:, style:))
  end

  def secondary(title: "Example", style: :secondary)
    render(ButtonComponent.new(title:, style:))
  end

  def warning(title: "Example", style: :warning)
    render(ButtonComponent.new(title:, style:))
  end

  def success(title: "Example", style: :success)
    render(ButtonComponent.new(title:, style:))
  end
end
