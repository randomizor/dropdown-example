# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DropdownMenuComponent, type: :component do
  subject(:component) do
    described_class.new(hidden:)
  end

  let(:component_preview) do
    render_inline(component) { content }
  end

  let(:hidden) { true }
  let(:content) { nil }

  it 'renders a default dropdown menu' do
    expect(component.hidden).to eq(true)
    component_preview
    expect(page).to have_selector("div.hidden[role='menu']", visible: false)
  end

  context 'when not hidden' do
    let(:hidden) { false }

    it 'renders a visible button' do
      expect(component.hidden).to eq(false)
      component_preview
      expect(page).to have_selector("div[role='menu']:not(.hidden)", visible: true)
    end
  end

  context 'when the menu has content' do
    let(:content) { render_inline(DropdownMenuItemComponent.new(url: Faker::Internet.url, title: 'Test Content')) }

    it 'renders content' do
      component_preview
      within "div[role='menu]" do |menu|
        expect(menu).to have_selector('a', text: 'Test Content')
      end
    end
  end
end
