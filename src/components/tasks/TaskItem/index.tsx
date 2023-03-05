import { Check, Trash } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { useStoreActions } from '../../../stores/hooks';

import styles from './styles.module.scss';

interface TasksItemProps {
  text: string;
  isFinished: boolean;
  id: string;
}

export function TaskItem(props: TasksItemProps) {
  const checkTodo = useStoreActions(actions => actions.checkTodo);
  const removeTodo = useStoreActions(actions => actions.removeTodo);

  return (
    <div className={styles.item}>
      <Checkbox.Root 
        className={styles.checkboxRoot} 
        id={props.id}
        checked={props.isFinished}
        onCheckedChange={() => checkTodo(props.id)}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <Check size={13} weight='bold' />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <label htmlFor={props.id}>
        {props.text}
      </label>

      <button className={styles.trash} onClick={() => removeTodo(props.id)}>
        <Trash size={18} />
      </button>
    </div>
  );
}