Feature: Button component

	Scenario: Button has the right type
		Given a button component
		Then the component should have the prop "type" set to "button"

	Scenario: Can override button type
		Given a button component
		When the prop "type" is set to "submit"
		Then the component should have the prop "type" set to "submit"
