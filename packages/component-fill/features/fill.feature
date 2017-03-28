Feature: Horizontal and vertical fill component

	Scenario: Component has the right class
		Given a fill component
		When the prop "className" is set to "helloworld foobar"
		Then the component should have the class "skeoh-ui-fill"
		And the component should have the class "helloworld"
		And the component should have the class "foobar"

	Scenario: Child component has the right class
		Given a fill component with a child
		Then the child should have the class "skeoh-ui-fill"
