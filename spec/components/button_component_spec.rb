# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ButtonComponent, type: :component do
  STYLES = {
    primary: 'blue',
    secondary: 'stone',
    warning: 'red',
    success: 'green'
  }.freeze

  subject(:component) do
    described_class.new(title:, type:, style:)
  end

  let(:component_preview) do
    render_inline(component)
  end

  let(:title) { Faker::Lorem.word }
  let(:type) { :button }
  let(:style) { :default }

  it 'renders a default style button', :aggregate_failures do
    expect(component.title).to eq(title)
    expect(component.background_colour).to eq('gray')
    expect(component.type).to eq(:button)
    expect(component.style).to eq(:default)
    component_preview
    expect(page).to have_selector("button.bg-gray-500[type='button']", text: title)
  end

  context 'when type is set to submit' do
    let(:type) { :submit }

    it 'renders a submit button' do
      component_preview
      expect(page).to have_selector("button[type='submit']")
    end
  end

  shared_examples 'a stylized button' do |colour|
    it 'renders a stylized button' do
      expect(component.background_colour).to eq(colour)
      component_preview
      expect(page).to have_selector("button.bg-#{colour}-500[type='button']", text: title)
    end
  end

  STYLES.each do |style, colour|
    context "when style is #{style}" do
      let(:style) { style }
      it_behaves_like 'a stylized button', colour
    end
  end
end
