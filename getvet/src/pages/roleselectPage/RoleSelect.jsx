import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './RoleSelect.module.css';

function RoleSelect() {

  const {setSelectedRole} = useAuth()
  const navigate = useNavigate()

  const setRole = (role)=> {

    setSelectedRole(role)
    navigate('/login')

  }

  return (

    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>
          Please select your role to continue
        </p>

        <div className={styles.roleWrapper}>
          <button className={styles.roleCard}
          onClick={()=>setRole('farmer')}
          >
            <span className={styles.icon}>🧑‍🌾</span>
            <h2>I am a Farmer</h2>
            <p>Get livestock health tips and resources</p>
          </button>

          <button className={styles.roleCard}
          onClick={()=>setRole('vet')}
          >
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
