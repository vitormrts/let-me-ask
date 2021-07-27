import { useHistory } from 'react-router-dom';
import IllustrationIcon from 'src/assets/icons/illustration.svg';
import LogoIcon from 'src/assets/icons/logo.svg';
import GoogleIcon from 'src/assets/icons/google-icon.svg';
import 'src/styles/auth.scss';
import { Button } from 'src/components/common';
import { useAuth } from 'src/hooks';

const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationIcon} alt="Ilustracao simbolizando perguntas e respostas"/>
        <strong>Crie sala de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoIcon} alt="Letmeask"/>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={GoogleIcon} alt="Logo do Google"/>
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home;