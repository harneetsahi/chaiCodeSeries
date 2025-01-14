# TodoList

It stores data in localStorage and fetches it.

# Steps:

1. Create TodoContext to share todos and functions across all components.
2. Craete TodoProvider to wrap the entire app and make the state and functions available to child components.
3. In App.jsx, create useState to manage todos, which is an array of todo objects, each containing an id, todo (msg), completed state (initially set to false), all functions for managing these todos: add, update, delete, toggle.
4. useEffect is used to store data is localStorage.
5.
6.
7.
8.
9.
10.
