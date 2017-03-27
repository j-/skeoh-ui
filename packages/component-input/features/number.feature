Feature: Number input control

	Scenario: Number input has the right type
		Given a number input
		Then the component should have the prop "type" set to "number"

	Scenario: Hide spinner for number input
		Given a number input
		When the prop "hideSpinner" is set to "true"
		Then the component should have the class "skeoh-ui-hide-number-spinner"
