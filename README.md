# Todo App With API
- [DEMO LINK](https://olegmysko.github.io/react-todo-app-with-api/)


##  README (UA)
- ua [Українська версія readme](README.ua.md)

# TODO APP
This is a simple Todo application , featuring full API interaction and enhanced UX.

## Main Features

- **Loading Todos:**
  Loads todos from the API with error handling and spinners while loading.

- **Adding a Todo:**
  - Input field is focused by default.
  - Empty titles show an error notification.
  - A temporary Todo with loader is shown while sending the request.
  - On success, the input clears; on error, text is preserved.

- **Deleting Todos:**
  - Remove individual todos or all completed ones.
  - Loader overlays on deleting items.
  - Shows an error notification if deletion fails, leaving todos intact.

- **Toggling Todo Status:**
  - Mark todos as completed or not.
  - Toggle all todos at once via `toggleAll`.
  - Loader shows while updating status.
  - Error notification if update fails.

- **Editing Todos:**
  - Double click to edit title.
  - Save changes on Enter or on blur, ESC cancels editing.
  - Empty titles delete the todo.
  - Loader shows while saving.
  - Shows error notification if save/delete fails.

## UX Improvements

- Auto-focus on input fields.
- Hide or disable elements that cannot be used.
- Prevent duplicate actions by disabling controls during processing.
- Show spinners to indicate in-progress actions.
- Error notifications disappear automatically after a short delay.

## Technologies

- React + TypeScript
- Redux for global state management
- CSS Modules for styling
- Fetch API for backend interaction


## Getting Started
```bash
npm install
npm start
