'use client';

import { useState } from 'react';
import styles from '../styles/Screeshot.module.css';

export default function Screenshot() {

    const [selectedImage, setSelectedImage] = useState(null);

    const screenshots = [
        '/home-page.png',
        '/login-api.png',
        '/logout-api.png'
    ];

    return (
        <section id="screenshots" className={styles.section}>

            <h2>Product Screenshots</h2>

            <div className={styles.grid}>

                {screenshots.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Screenshot"
                        className={styles.image}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}

            </div>

            {/* Modal */}

            {selectedImage && (
                <div
                    className={styles.modal}
                    onClick={() => setSelectedImage(null)}
                >

                    <img
                        src={selectedImage}
                        alt="Expanded Screenshot"
                        className={styles.expandedImage}
                    />

                </div>
            )}

        </section>
    );
}