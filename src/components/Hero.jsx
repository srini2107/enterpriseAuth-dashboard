import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>

            <h1>Secure Authentication & Access Management</h1>

            <p>
                EnterpriseAuth helps developers implement secure authentication,
                JWT authorization, RBAC, API security, and scalable user management.
            </p>

            <div className={styles.buttons}>
                <a href="/signup">
                    <button>Start Free Trial</button>
                </a>
            </div>

            {/* Demo Video */}
            <div className={styles.videoContainer}>
                <iframe
                    src="https://www.loom.com/embed/d7cd25e4e31740e6a5fd4dc3cb3318de"
                    frameBorder="0"
                    allowFullScreen
                    className={styles.video}
                ></iframe>
            </div>

        </section>
    );
}