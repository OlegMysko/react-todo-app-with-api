import { TodoItem } from './TodoItem';
import { Todo } from '../types/Todo';
type Props = {
  getFilter: () => Todo[];
  handleRemoveTodo: (id: number) => void;
  tempTodo: Todo | null;
  isLoading: boolean;
  loadingTodoId: number[];
  handleUpdateTodoChecked: (todo: { id: number; completed: boolean }) => void;
  handleUpdateTitle: (args: { id: number; title: string }) => Promise<void>;
  handleError: (message: string) => void;
};

export const TodoList: React.FC<Props> = ({
  getFilter,
  handleRemoveTodo: delitePost,
  tempTodo,
  loadingTodoId,
  handleUpdateTodoChecked,
  handleError,
  handleUpdateTitle,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {/* This is a completed todo */}

      {getFilter().map(tod => {
        return (
          <TodoItem
            handleError={handleError}
            handleRemoveTodo={delitePost}
            tod={tod}
            key={tod.id}
            isLoading={false}
            loadingTodoId={loadingTodoId}
            handleUpdateTodoChecked={handleUpdateTodoChecked}
            handleUpdateTitle={handleUpdateTitle}
          />
        );
      })}
      {tempTodo && (
        <TodoItem
          handleRemoveTodo={delitePost}
          tod={tempTodo}
          key={0}
          isLoading={true}
        />
      )}
    </section>
  );
};
