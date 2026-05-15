import styles from '../styles/feature.module.css';

const features = [
    "JWT Authentication",
    "Role-Based Access Control",
    "OAuth Login",
    "API Security",
    "Audit Logs",
    "Multi-Tenant Support"
];

export default function Features() {
    return (
        <section id="features" className={styles.features}>
            <h2>Features</h2>

            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{feature}</h3>
                        <p>
                            Enterprise-grade implementation for secure authentication workflows.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}