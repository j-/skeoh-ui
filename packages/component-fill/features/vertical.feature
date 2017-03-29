Feature: Vertical fill component

	Scenario: Component has the right class
		Given a vertical fill component
		When the prop "className" is set to "helloworld foobar"
		Then the component should have the class "skeoh-ui-fill-vertical"
		And the component should have the class "helloworld"
		And the component should have the class "foobar"
