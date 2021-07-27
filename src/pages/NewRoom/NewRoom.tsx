import IllustrationIcon from 'src/assets/icons/illustration.svg';
import LogoIcon from 'src/assets/icons/logo.svg';
import 'src/styles/auth.scss';
import { Button } from 'src/components/common';
import { Link } from 'react-router-dom';
import { useAuth } from 'src/hooks';

const NewRoom = () => {
  const { user } = useAuth();

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
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Que entrar em uma sala existente? <Link to="/"> clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}

export default NewRoom;