# ngRibbon

A Ribbon component using AngularJS.

Examples:
https://github.com/OkGoDoIt/Office-Ribbon-2010

## Design Notes

Tabs are registered with the TabRegister provider.

	interface TabItem {
		name: string;
		/**
		 * Can be a number or 'last'.
		 */
		order: number | string;
		templateUrl: string;
		contextual?: {
			group: string;
			color: string;
		}
	}

	type Deactivate = () => void;

	interface TabService {
		setContext(tabName: string; context: any): void;
		activateContextual(groupName: string, context: any): Deactivate;
	}

Each action is a directive that can handle itself: layout, linebreaks.

## Features:

1. Tabs
2. Backstage
	1. Backstage Menu
	1. Backstage Content
3. Title Bar
4. Collapsible
4. Responsive
5. Contextual Tabs
6. User Settings
7. Actions
	1. Large Button
	1. Small Button
	1. Button Groups
	2. Split Button
	3. Separator
	4. Gallery
8. Commands
	1. Contextual Commands
9. Declarative
1. API
