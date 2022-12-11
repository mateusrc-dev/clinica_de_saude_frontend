import { useAuthUser } from "../../hooks/authUser";
import { useAuthProfessional } from "../../hooks/authProfessional";
import { Container, Main } from "./styles";
import { useNavigate } from "react-router-dom";
import { CiCloudSun } from "react-icons/ci";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";

export function Welcome() {
  const hours = new Date();
  const { user } = useAuthUser();
  const { professional } = useAuthProfessional();
  const navigate = useNavigate();

  function handleHours() {
    let Hours;
    if (hours.getHours() >= 0 && hours.getHours() <= 12) {
      Hours = "Bom dia";
    } else if (hours.getHours() > 12 && hours.getHours() <= 18) {
      Hours = "Boa tarde";
    } else {
      Hours = "Boa noite";
    }
    return Hours;
  }

  const Hours = handleHours();

  function handleTime() {
    setTimeout(function () {
      navigate("/");
    }, 8000);
  }

  handleTime();

  return (
    <Container>
      <Main>
        <div className="welcome">
          {Hours === "Bom dia" ? (
            <h1>
              {Hours} <CiCloudSun />
            </h1>
          ) : null}
          {Hours === "Boa tarde" ? (
            <h1>
              {Hours} <CiCloudSun />
            </h1>
          ) : null}
          {Hours === "Boa noite" ? (
            <h1>
              {Hours} <BsFillMoonStarsFill />
            </h1>
          ) : null}
        </div>
        <h2 className="nameUser">
          Seja bem vindo(a) a
          <span className="clinicName">
            <GiHealthNormal className="svg" />
            fulness clinic
          </span>
          {user ? user.name : professional.name}
          !!
        </h2>
      </Main>
    </Container>
  );
}