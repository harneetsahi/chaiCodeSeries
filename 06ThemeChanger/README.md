1. Create ThemeContext in a js file using createContext.
2. Pass in an object with 3 key properties. General theme, dark function, light function.
3. Convert it into a ThemeProvider in the same file.
4. Create a custom hook useTheme and return useContext with ThemeContext component. useContext(ThemeContext).
5. Using the useContext functio above, we will be able to extract the key property values we passed in earlier in point 2.
6. Create a ThemeBtn in its own file and create a variable using useTheme and extract all its key property values.
7. Set an onChange function on the toggle button and set a checked value of General theme to 'dark'
8. Create a function that fires on toggle that stores the checked value in a variable.
9. Set a condition that checks if the variable above is checked then call the dark function from useTheme, otherwise calls the light function.
10. Create a card element in a separate file.
11. Wrap the html in ThemeProvider in the App.jsx and give it the key references we created in point 2.
12. Use useState to create general theme mode.
13. Create a function for dark theme and a function for light theme that sets the above general theme to dark and light respectively.
14. Use useEffect to grab html element. Remove all classes from it and add general theme created above.
