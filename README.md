# Angular_Accordion

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-lffkqg)

* This component has a title property and a visible property that controls whether the accordion is open or closed. It also has two output properties: open and close, which are both event emitters.

* When the title is clicked, the toggleVisibility method is called. This method toggles the visible property and emits an open or close event depending on the new value of the visible property.

* The component's template uses an ngIf directive to show or hide the content inside the accordion based on the value of the visible property.

* In this example, the AppComponent template includes an app-accordion element with open and close event bindings. When the accordion is opened or closed, the onOpen and onClose methods in the AppComponent class will be called, respectively.
