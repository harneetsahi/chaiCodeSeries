# TodoList

Todo App using react. Also stores data in localStorage and fetches it when it loads. I created it using the concept of useContext to pass down the values and functions.


# Steps:

1. Create TodoContext to share todos and functions across all components.
2. Craete TodoProvider to wrap the entire app and make the state and functions available to child components.
3. In App.jsx, create useState to manage todos, which is an array of todo objects, each containing an id, todo (msg), completed state (initially set to false), all functions for managing these todos: add, update, delete, toggle.
4. useEffect is used to store data is localStorage.

5. Create a TodoForm.jsx file to handle form input handling. It handles s single todo via state. Value is stored in the todo using setTodo.
6. addToDo is called to create a new todo object, generates a new Id, and sets the initial completed state to false.
7. This new todo is added to the todos in the app.jsx
8. setTodo is set to empty to empty the input field.

9. Each todo is rendered as a TodoItem component which receives todo data (id, todo (msg), completed state) as props.
10. TodoItem has an internal state that checks if the todo text is in read-only mode or edit mode.
11. If it's in edit mode, the state isToDoEditable is set to true, and we modify the todoMsg.
12. If not in edit mode, the todo is displayed as read-only.
13. Clicking edit button makes the field editable by setting isTodoEditable true.
14. Save button calls the updateTodo to update the todo in the global state.
15. updateTodo then replaces the original todo object with the updated todo item by preserving its id and completed state.

16. Delete buttons removes the todo from the todos array.
17. Completion checkbox toggles the completed state by calling toggleComplete function.

18. In App.jsx, addTodo adds a new todo to the todos array.
19. updateTodo updates the existing todo in the todos array by replacing with the new updated todo object.
20. deleteTodo removes a todo from the todos array by using a filter method.
21. toggleComplete toggles the complete state.
