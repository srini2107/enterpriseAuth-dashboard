import styles from '../styles/pricing.module.css';

export default function Pricing() {
    return (
        <section id="pricing" className={styles.pricing}>
            <h2>Pricing</h2>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>Starter</h3>
                    <h1>$9/month</h1>
                    <p>Basic authentication features</p>
                </div>

                <div className={styles.card}>
                    <h3>Professional</h3>
                    <h1>$29/month</h1>
                    <p>RBAC, OAuth, Audit Logs</p>
                </div>

                <div className={styles.card}>
                    <h3>Enterprise</h3>
                    <h1>Custom</h1>
                    <p>Dedicated enterprise support</p>
                </div>
            </div>
        </section>
    );
}