Feature: Flex item component

	Scenario: Component has the right class
		Given a flex item
		When the prop "className" is set to "helloworld foobar"
		Then the component should have the class "skeoh-ui-flex-item"
		And the component should have the class "helloworld"
		And the component should have the class "foobar"

	Scenario: Grow is 1 by default
		Given a flex item
		Then the component should have the style "flexGrow" set to "1"

	Scenario: Can override grow value
		Given a flex item
		And the prop "grow" is set to 2
		Then the component should have the style "flexGrow" set to "2"
