import styles from "./page.module.css";
import { TodoList } from "@/components/organisms/ToDoList/ToDoList";
import { Input } from "@/components/atoms/Input/Input";
import { Footer } from "@/components/organisms/Footer/Footer";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>ToDo List</h1>
        <Input />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}
