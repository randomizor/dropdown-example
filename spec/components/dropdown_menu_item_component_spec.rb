# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DropdownMenuItemComponent, type: :component do
  STYLES = {
    primary: 'blue',
    secondary: 'stone',
    warning: 'red',
    success: 'green'
  }.freeze

  subject(:component) do
    described_class.new(title:, url:, icon:, style:)
  end

  let(:component_preview) do
    render_inline(component)
  end

  let(:title) { Faker::Lorem.word }
  let(:url) { Faker::Internet.url }
  let(:icon) { 'cog' }
  let(:style) { :default }

  it 'renders a default style dropdown item with icon', :aggregate_failures do
    expect(component.title).to eq(title)
    expect(component.text_colour).to eq('gray')
    expect(component.icon).to eq('cog')
    expect(component.style).to eq(:default)
    component_preview
    expect(page).to have_selector("a.text-gray-600[href='#{url}']", text: title)
    expect(page).to have_selector('svg')
  end

  context 'when no icon is given' do
    let(:icon) { nil }

    it 'renders a default style dropdown item without icon', :aggregate_failures do
      expect(component.icon).to eq(nil)
      component_preview
      expect(page).to have_no_selector('svg')
    end
  end

  shared_examples 'a stylized item' do |colour|
    it 'renders a stylized item' do
      expect(component.text_colour).to eq(colour)
      component_preview
      expect(page).to have_selector("a.text-#{colour}-600[href='#{url}']", text: title)
    end
  end

  STYLES.each do |style, colour|
    context "when style is #{style}" do
      let(:style) { style }
      it_behaves_like 'a stylized item', colour
    end
  end
end
