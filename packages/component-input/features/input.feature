Feature: Text input control

	Scenario: Input has the right type
		Given a text input
		Then the component should have the prop "type" set to "text"

	Scenario: Input has the right class
		Given a text input
		When the prop "className" is set to "helloworld foobar"
		Then the component should have the class "skeoh-ui-input"
		And the component should have the class "helloworld"
		And the component should have the class "foobar"
