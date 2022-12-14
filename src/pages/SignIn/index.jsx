import { useAuthUser } from "../../hooks/authUser";
import { useAuthProfessional } from "../../hooks/authProfessional";
import { Container, Main, Header, Footer } from "./styles";
import { GiHealthNormal } from "react-icons/gi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { MdCreate } from "react-icons/md";
import { useState, useEffect } from "react";
import { TfiBackLeft } from "react-icons/tfi";
import { TfiHandPointUp } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailProfessional, setEmailProfessional] = useState("");
  const [passwordProfessional, setPasswordProfessional] = useState("");
  const { signIn, user } = useAuthUser();
  const { signInProfessional, professional } = useAuthProfessional();
  const [click, setClick] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (user || professional) {
      navigate("/welcome")
    }
  }, [user, professional]);

  function handleSignIn() {
    signIn({ email, password } );
  }

  function handleSignInProfessional() {
    signInProfessional({ emailProfessional, passwordProfessional });
  }

  function handleClick(number) {
    if (number === click) {
      setClick(0);
    } else {
      setClick(number);
    }
  }

  return (
    <Container>
      <Header>
        <Link to="/">
            retornar para a Home
            <TfiBackLeft />
        </Link>
      </Header>
      <Main>
        <div className="main">
          <div className="logo">
            <GiHealthNormal />
            <div className="logoText">
              <h1>fullness clinic</h1>
              <p>Sempre pensando na sua saúde!</p>
            </div>
          </div>
          <div className="clientOrProfessional">
            <div className="table">
              <div className="header">
                <button
                  className={click === 1 ? "client select" : "client"}
                  onClick={() => handleClick(1)}
                >
                  Paciente
                </button>
                <button
                  className={
                    click === 2 ? "professional select" : "professional"
                  }
                  onClick={() => handleClick(2)}
                >
                  Profissional
                </button>
              </div>
              <div className="content">
                <div className={click === 0 ? "choice" : "none"}>
                  <TfiHandPointUp />
                  <h2>
                    Escolha acima se você vai logar como paciente ou como
                    profissional!
                  </h2>
                </div>
                <div className={click === 1 ? "loginClient" : "none"}>
                  <h1>Faça seu login (Cliente)</h1>
                  <label htmlFor="email">
                    <strong>Email:</strong>
                    <Input
                      id={"email"}
                      placeholder={"Digite o seu email!"}
                      onChange={(e) => setEmail(e.target.value)}
                    >
                      <HiOutlineMail />
                    </Input>
                  </label>
                  <label htmlFor="password" className="password">
                    <strong>Senha:</strong>
                    <Input
                      id={"password"}
                      type={"password"}
                      placeholder="Digite a sua senha!"
                      onChange={(e) => setPassword(e.target.value)}
                    >
                      <RiLockPasswordFill />
                    </Input>
                  </label>
                  <Button onClick={handleSignIn}>
                    Fazer login
                    <FiLogIn />
                  </Button>
                  <Link to="/signUp">
                      Crie a sua conta!
                      <MdCreate />
                  </Link>
                </div>
                <div className={click === 2 ? "loginClient" : "none"}>
                  <h1>Faça seu login (Profissional)</h1>
                  <label htmlFor="emailProfessional">
                    <strong>Email:</strong>
                    <Input id={"emailProfessional"} placeholder={"Digite o seu email!"} onChange={(e) => setEmailProfessional(e.target.value)}>
                      <HiOutlineMail />
                    </Input>
                  </label>
                  <label htmlFor="passwordProfessional" className="password">
                    <strong>Senha:</strong>
                    <Input
                      id={"passwordProfessional"}
                      type={"password"}
                      placeholder="Digite a sua senha!"
                      onChange={(e) => setPasswordProfessional(e.target.value)}
                    >
                      <RiLockPasswordFill />
                    </Input>
                  </label>
                  <Button onClick={handleSignInProfessional}>
                    Fazer login
                    <FiLogIn />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
