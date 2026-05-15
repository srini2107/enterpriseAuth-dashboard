export default function Footer() {
    return (
        <footer
            style={{
                padding: '40px',
                textAlign: 'center',
                background: '#111827',
                color: 'white'
            }}
        >
            <p>© 2026 EnterpriseAuth</p>

            <div style={{ marginTop: '10px' }}>
                <a href="/privacy-policy">Privacy Policy</a> |{' '}
                <a href="/terms-of-use">Terms of Service</a> |{' '}
                <a href="/refund-policy">Refund Policy</a>
            </div>
        </footer>
    );
}