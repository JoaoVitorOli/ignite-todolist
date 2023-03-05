import styles from './styles.module.scss';

import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img 
        src={Logo}
        alt="Logo Todo" 
      />
    </header>
  )
}