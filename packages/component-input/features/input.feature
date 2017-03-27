Feature: Text input control

	Scenario: Input has the right type
		Given a text input
		Then the component should have the prop "type" set to "text"
