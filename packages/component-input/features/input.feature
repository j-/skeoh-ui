Feature: Input control

	Scenario: Hide spinner for number Input
		Given a number input
		When the prop "hideSpinner" is set to "true"
		Then the component should have the class "skeoh-ui-hide-number-spinner"
