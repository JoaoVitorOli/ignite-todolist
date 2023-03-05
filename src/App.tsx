import { Header } from './components/header';
import styles from './styles/App.module.scss';

import { Form } from './components/form';
import { Tasks } from './components/tasks';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.wrapper}>
        <Form />

        <Tasks />
      </main>
    </div>
  )
}

export default App
