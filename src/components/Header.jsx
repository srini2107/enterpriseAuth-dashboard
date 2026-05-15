import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <a>
                    <img
                        src="/logo11.png"
                        alt="EnterpriseAuth Logo"
                        className={styles.logoImage}
                    />
                </a>
            </div>

            <nav className={styles.nav}>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#screenshots">Screenshots</a>

                <a href="/dashboard" className={styles.dashboardLink}>
                    Dashboard
                </a>

                <button className={styles.button}>
                    Get Started
                </button>
            </nav>
        </header>
    );
}