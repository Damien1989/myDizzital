import SignUpForm from '.././_components/SignUpForm';
import Navbar from '.././_components/Navbar';

export default function InscriptionPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Bienvenue dans la page d'inscription</h1>
        <SignUpForm />
      </main>
    </>
  );
}