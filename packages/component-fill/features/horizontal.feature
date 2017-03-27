Feature: Horizontal fill component

	Scenario: Component has the right class
		Given a horizontal fill component
		When the prop "className" is set to "helloworld foobar"
		Then the component should have the class "skeoh-ui-fill-horizontal"
		And the component should have the class "helloworld"
		And the component should have the class "foobar"
