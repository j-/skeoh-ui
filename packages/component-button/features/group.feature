Feature: Button group component

	Scenario: Component has the right class
		Given a button group component
		When the prop "className" is set to "helloworld foobar"
		And the component should have the class "helloworld"
		And the component should have the class "foobar"

	Scenario: Default type is horizontal
		Given a button group component
		Then the component should have the class "skeoh-ui-button-group-horizontal"

	Scenario: Default type is horizontal
		Given a button group component
		When the prop "vertical" is set to true
		Then the component should have the class "skeoh-ui-button-group-vertical"
