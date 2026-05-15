import styles from '../../styles/dashboard.module.css';

export default function DashboardPage() {
    return (
        <div className={styles.container}>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <h2 className={styles.logo}>EnterpriseAuth</h2>

                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Users</li>
                        <li>Roles</li>
                        <li>Permissions</li>
                        <li>API Keys</li>
                        <li>Audit Logs</li>
                        <li>Settings</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className={styles.main}>

                <div className={styles.topbar}>
                    <h1>Dashboard</h1>

                    <button className={styles.button}>
                        Create User
                    </button>
                </div>

                {/* KPI Cards */}
                <div className={styles.cardGrid}>

                    <div className={styles.card}>
                        <h3>Total Users</h3>
                        <p>12,540</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Active Sessions</h3>
                        <p>1,245</p>
                    </div>

                    <div className={styles.card}>
                        <h3>API Requests</h3>
                        <p>4.8M</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Roles</h3>
                        <p>18</p>
                    </div>

                </div>

                {/* Recent Logins */}
                <section className={styles.section}>
                    <h2>Recent Logins</h2>

                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>Admin</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>Alice Smith</td>
                            <td>alice@example.com</td>
                            <td>Developer</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>Robert King</td>
                            <td>robert@example.com</td>
                            <td>Viewer</td>
                            <td>Inactive</td>
                        </tr>
                        </tbody>
                    </table>
                </section>

                {/* Permissions */}
                <section className={styles.section}>
                    <h2>Permissions</h2>

                    <div className={styles.permissions}>
                        <span>Read Access</span>
                        <span>Write Access</span>
                        <span>Admin Control</span>
                        <span>API Access</span>
                        <span>User Management</span>
                    </div>
                </section>

            </main>
        </div>
    );
}