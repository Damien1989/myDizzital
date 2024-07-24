'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SignUpForm.module.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Inscription réussie');
        router.push('/users'); // Redirection vers la page des utilisateurs
      } else {
        const errorData = await response.json();
        console.error('Erreur lors de l\'inscription', errorData);
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
    }
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Inscription</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>S'inscrire</button>
    </form>
  );
};

export default SignupForm;