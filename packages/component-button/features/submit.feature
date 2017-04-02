Feature: Submit button component

	Scenario: Submit button has the right type
		Given a submit button component
		Then the component should have the prop "type" set to "submit"

	Scenario: Can override button type
		Given a submit button component
		When the prop "type" is set to "button"
		Then the component should have the prop "type" set to "button"

	Scenario: Button has the right text by default
		Given a submit button component
		Then the component should have the text "Submit"
