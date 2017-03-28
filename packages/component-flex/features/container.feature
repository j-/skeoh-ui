Feature: Flex container component

	Scenario: Component has the right class
		Given a flex container
		When the prop "className" is set to "helloworld foobar"
		Then the component should have the class "skeoh-ui-flex-container"
		And the component should have the class "helloworld"
		And the component should have the class "foobar"

	Scenario: Auto direction by default
		Given a flex container
		Then the component should have the style "flexDirection" set to "auto"

	Scenario: Can render row
		Given a flex container
		When the prop "row" is set to true
		Then the component should have the style "flexDirection" set to "row"

	Scenario: Can render reversed row
		Given a flex container
		When the prop "rowReverse" is set to true
		Then the component should have the style "flexDirection" set to "row-reverse"

	Scenario: Can render column
		Given a flex container
		When the prop "column" is set to true
		Then the component should have the style "flexDirection" set to "column"

	Scenario: Can render reversed column
		Given a flex container
		When the prop "columnReverse" is set to true
		Then the component should have the style "flexDirection" set to "column-reverse"

	Scenario: Order of precedence (row vs rowReverse)
		Given a flex container
		When the prop "row" is set to true
		And the prop "rowReverse" is set to true
		Then the component should have the style "flexDirection" set to "row"

	Scenario: Order of precedence (row vs column)
		Given a flex container
		When the prop "row" is set to true
		And the prop "column" is set to true
		Then the component should have the style "flexDirection" set to "row"

	Scenario: Custom styles
		Given a flex container
		When the prop "style" is
			"""
			{
				"color": "red",
				"background": "blue"
			}
			"""
		Then the component should have the style "color" set to "red"
		And the component should have the style "background" set to "blue"
		And the component should have the style "flexDirection" set to "auto"
