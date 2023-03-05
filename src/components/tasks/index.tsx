import { useStoreState } from '../../stores/hooks';
import styles from './styles.module.scss';

import CliboardImg from '../../assets/Clipboard.png';
import { TaskItem } from './TaskItem';

export function Tasks() {
  const todos = useStoreState(state => state.todos);
  const todosLength = todos.length;
  const todosCheckedLenght = todos.filter(todo => todo.isFinished).length;

  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.tasksCreated}>
          <strong>Tarefas criadas</strong>
          <span>
            {todosLength}
          </span>
        </div>

        <div className={styles.finishedTasks}>
          <strong>Concluidas</strong>
          <span>
            {todosCheckedLenght} de {todosLength}
          </span>
        </div>
      </div>
      
      <div className={styles.taskList}>
        {todos.length > 0 ? (
          todos.map(todo => (
            <TaskItem 
              key={todo.id} 
              isFinished={todo.isFinished}
              text={todo.title}
              id={todo.id}
            />
          ))
        ) : (
          <NoTasks />
        )}
      </div>
    </div>
  );
}

function NoTasks() {
  return (
    <div className={styles.noTask}>
      <img 
        src={CliboardImg} 
        alt="" 
      />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <h2>Crie tarefas e organize seus itens a fazer</h2>
    </div>
  )
}
