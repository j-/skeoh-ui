Feature: Number input control

	Scenario: Number input has the right type
		Given a number input
		Then the component should have the prop "type" set to "number"

	Scenario: Number input has the right class
		Given a number input
		When the prop "className" is set to "helloworld foobar"
		Then the component should have the class "skeoh-ui-input-number"
		And the component should have the class "helloworld"
		And the component should have the class "foobar"

	Scenario: Hide spinner for number input
		Given a number input
		When the prop "hideSpinner" is set to "true"
		Then the component should have the class "skeoh-ui-hide-number-spinner"
