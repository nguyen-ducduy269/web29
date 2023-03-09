import { useTodoApp } from "./useTodoApp";

export default function TodoApp() {
  const { credential, setCredential, todos } = useTodoApp();

  return (
    <div>
      <h1>Hello, {credential.user.displayName}</h1>
      <button onClick={() => setCredential({ user: null, token: null })}>
        Logout
      </button>
    </div>
  );
}
