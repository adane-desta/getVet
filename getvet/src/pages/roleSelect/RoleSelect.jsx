import styles from './RoleSelect.module.css';

function RoleSelect() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome 👋</h1>
        <p className={styles.subtitle}>
          Please select your role to continue
        </p>

        <div className={styles.roleWrapper}>
          <button className={styles.roleCard}>
            <span className={styles.icon}>🧑‍🌾</span>
            <h2>I am a Farmer</h2>
            <p>Get livestock health tips and resources</p>
          </button>

          <button className={styles.roleCard}>
            <span className={styles.icon}>🩺</span>
            <h2>I am a Veterinarian</h2>
            <p>Assist farmers and monitor animal health</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelect;
