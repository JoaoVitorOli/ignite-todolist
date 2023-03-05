import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.scss';
import { useStoreActions } from '../../stores/hooks';
import { FormEvent, useRef } from 'react';

export function Form() {
  const addTodo = useStoreActions(actions => actions.addTodo); 
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addTodo({
      id: crypto.randomUUID(),
      title: inputRef.current?.value || '',
      isFinished: false
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
        type="text"
        placeholder='Adicione uma nova tarefa'
        ref={inputRef}
      />

      <button type='submit'>
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  );
}