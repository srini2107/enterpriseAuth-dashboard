'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Auth.module.css';
import Link from "next/link";

export default function LoginPage() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                'http://localhost:8082/auth/login',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const token = await response.text();

            console.log('JWT Token:', token);

            localStorage.setItem('token', token);

            alert('Login successful!');

            router.push('/dashboard');

        } catch (error) {

            console.error(error);

            alert('Invalid credentials');
        }
    };

    return (
        <div className={styles.container}>

            <Link href="/" className={styles.backButton}>
                ← Back to Home
            </Link>


            <form className={styles.form} onSubmit={handleSubmit}>

                <h1>Login</h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <button type="submit">
                    Login
                </button>

                <p>
                    New user?
                    <a href="/signup"> Create Account</a>
                </p>

            </form>

        </div>
    );
}