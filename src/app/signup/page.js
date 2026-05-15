'use client';

import { useState } from 'react';
import styles from '../../styles/Auth.module.css';

import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function SignupPage() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
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
                'http://localhost:8082/auth/register',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                    }),
                }
            );

            const data = await response.text();

            alert(data);

            router.push('/login');

        } catch (error) {

            console.error(error);

            alert('Signup failed');
        }
    };

    return (
        <div className={styles.container}>

            <Link href="/" className={styles.backButton}>
                ← Back to Home
            </Link>

            <form className={styles.form} onSubmit={handleSubmit}>

                <h1>Create Account</h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                />

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
                    Sign Up
                </button>

                <p>
                    Already have an account?
                    <a href="/login"> Login</a>
                </p>

            </form>

        </div>
    );
}