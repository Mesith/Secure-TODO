import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import * as SQLite from "expo-sqlite";

export type Todo = { id: number; name: string };

type DBContextProps = {
  todos: Todo[];
  currentTodoItem: Todo | null;
  setTodos: (todos: Todo[]) => void;
  setCurrentTodoItem: (todo: Todo | null) => void;
  addTodo: (name: string) => void;
  getAllTodos: () => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

export const DBContext = createContext<DBContextProps>({
  todos: [],
  currentTodoItem: null,
  setTodos: (todos) => {},
  setCurrentTodoItem: (todo) => {},
  addTodo: (name: string) => {},
  getAllTodos: () => {},
  updateTodo: (todo: Todo) => {},
  deleteTodo: (todo: Todo) => {},
});
/* In order to persist data, an SQLite database is used. The database logic is encapsulated within a context, 
providing a convenient way to manage the database operations. By encapsulating the database logic inside the context, 
it becomes available to its children. */
export const DBContextProvider = ({ children }: { children: ReactNode }) => {
  const db = SQLite.openDatabase("todo.db");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodoItem, setCurrentTodoItem] = useState<Todo | null>(null);

  // Create database table if it is not exsist
  const createTodoTable = useCallback(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
      );
    });
  }, [db]);

  // Retriving all available todos to show on HomeScreen, update the state when success
  const getAllTodos = useCallback(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM todos",
        null,
        (txObj, resultSet) => {
          setTodos(resultSet.rows._array);
        },
        (txObj, error) => console.log(error)
      );
    });
  }, [db]);

  //To insert a new todo into the database and ensure that the updated todo list is retrieved to update the user interface,
  const addTodo = useCallback(
    (title: string) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO todos (name) values (?)",
          [title],
          (_txObj, _resultSet) => {
            getAllTodos();
          }
        );
      });
    },
    [db, getAllTodos]
  );

  /*Update existing todo in the database and ensure that the updated 
todo list is retrieved to update the user interface, */
  const updateTodo = useCallback(
    (todo: Todo) => {
      const { id, name } = todo;
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE todos SET name = ? WHERE id = ?",
          [name, id],
          (txObj, resultSet) => {
            if (resultSet.rowsAffected > 0) {
              setCurrentTodoItem(null);
              getAllTodos();
            }
          },
          (txObj, error) => console.log(error)
        );
      });
    },
    [db, getAllTodos]
  );

  /* Delete existing todo in the database and ensure that the updated 
todo list is retrieved to update the user interface,  */
  const deleteTodo = useCallback(
    (todo: Todo) => {
      const { id } = todo;
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM todos WHERE id = ?",
          [id],
          (txObj, resultSet) => {
            if (resultSet.rowsAffected > 0) {
              setCurrentTodoItem(null);
              getAllTodos();
            }
          },
          (txObj, error) => console.log(error)
        );
      });
    },
    [db, getAllTodos]
  );

  useEffect(() => {
    // create a table if not exist and retrive all todos to update UI when the app is authenticated
    createTodoTable();
    getAllTodos();
    return () => {
      // closing open connetion to the database, when component unmount
      db.closeAsync();
    };
  }, []);

  return (
    <DBContext.Provider
      value={{
        todos,
        currentTodoItem,
        setTodos,
        setCurrentTodoItem,
        addTodo,
        getAllTodos,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </DBContext.Provider>
  );
};
