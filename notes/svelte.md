SVELTE - Tutorial ShaunPelling
Svelte is a compiler for creating reactive web apps and interfaces.
What is a compiler?
A compiler is a software that translates a program written in a high level language to a low level language.
so can we say beyond it being a library for making Frontend Applications, svelte is like babel since babel is a trans compiler?
question:
How is JSX processed before babel transpiles it?
why is svelte comparatively faster(smaller size)? what are the key differences between Vue, React and Svelte beyond size and how does it translate to better Frontend Development?

Svelte- Tutorial
Svelte is a compiler for creating reactive webapps and interfaces
a compiler is a software that translates a program written in a high level language to a low level language.
If svelte is a compiler because it takes a high level language and converts it to a low level language(or into a language the browser can understand)
The can we make the association that svelte is to babel? since babel is a trans compiler?
How does the browser identify or inteprete JSX?(i mean the steps before babel transpiles it)

Main difference between svelte, Vue and Reactjs
Svelte is a compiler not a framework
svelte compiles your code at buildtime into a single vanilla javascript bundle
No extra scripts or libraries are shipped into production
Results in faster running websites
The root component in svelte is known as the App.svelte
All components in the app must have the extension App.svelte.

A component can have three parts/sections

1. The script - this contains the component logic
2. The HTML - The HTML template injected in the DOM structure of the application
3. The style - Style the template

The Main.js file - kickstarts the application. It contains the code that runs first and sets up the application.
what does the Main.js file contain?
It contains an import of the App component(the root component).
An instance of the app component is made where it contains the an object with properties:
target and props and the variable is called app.

The app instance exported is injected in the document body of the index.html file.

Then the app is exported.
Question?
How does the instance of the app created app get used in the web application?

The App is more like the root component that gets injected into the DOM.The other components will be nested in the App component.
When the app is built, svelte looks up all the components and compiles them into a single JavaScript bundle and outputs it into the bundle.js file inthe build folder.
Hence all of the scripts in the various components and all of the styles from the components are all bundled into a single file inthe build folder.
Then in the index.html file we link to all the bundled files(both the bundle.js and the bundle.css)

Question based on the example with Yoshi, local/global props?
React to user events?

How does svelte work under the hood?
Components are the buidling blocks of the web app. The are put together and creates a whole website
How are languages processed?
High level language
Compiler
Differences between a compiler and an intepreter
The compiler scans the code, processes it and translates all the source code into machine code. Whereas an interpreter translates the program one statement at a time.
