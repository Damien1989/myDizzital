import Navbar from '../_components/Navbar';
import LoginForm from '../_components/LoginForm';

export default function ConnexionPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Connectez-vous à votre compte.</h1>
        <LoginForm />
      </main>
    </>
  );
}