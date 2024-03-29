import { Container } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TiCancel } from "react-icons/ti";
import { AiFillSchedule } from "react-icons/ai";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import moment from "moment"

export function YourSchedules() {
  const [schedules, setSchedules] = useState([]);

  const today = new Date();
  const Day = String(today.getDate()).padStart(2, "0");
  const Year = today.getFullYear();
  const Month = String(today.getMonth() + 1).padStart(2, "0");
  const dateString = `${Year}-${Month}-${Day}`;

  const Hours = String(today.getHours()).padStart(2, "0");
  const Minutes = String(today.getMinutes()).padStart(2, "0");
  const hoursString = `${Hours}${Minutes}`;

  useEffect(() => {
    async function fetchSchedules() {
      const response = await api.get("schedulesUser/");
      setSchedules(response.data.schedules);
    }
    fetchSchedules();
  }, [schedules]);

  async function handleConfirmCancel(id) {
    if (confirm("Tem certeza que deseja cancelar?")) {
      const justification = prompt("Escreva uma justificativa!");
      const status = "desmarcado por paciente!";
      await api.put(
        `/schedulesCancel/${id}/?status=${status}&justification=${justification}`
      );
      alert("Consulta desmarcada!");
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <section>
          <div className="textButton">
            <Link to={-1}>
              <ButtonText>
                <TiArrowBack />
                retornar
              </ButtonText>
            </Link>
          </div>
          <h1>
            Seus agendamentos
            <AiFillSchedule />
          </h1>
          <p>
            Abaixo estão todos os seus agendamentos, você pode{" "}
            <strong>reagendar</strong> ou <strong>desmarcar</strong> consultas
            se desejar!
          </p>
          <div className="main">
            {schedules.map((schedule) => (
              <div className="Scheduling" key={String(schedule.id)}>
                <svg className="svg" width="500px" height="350px">
                  <polygon
                    points="0,50 50,0 500,0 500,300 450,350 0,350 0,50"
                    stroke="blue"
                    strokeWidth="0.5"
                    fill="white"
                  />
                </svg>
                <div className="scheduling">
                <img
                  src={
                    schedule.avatar
                      ? `${api.defaults.baseURL}/files/${schedule.avatar}`
                      : avatarPlaceholder
                  }
                  alt="foto do profissional"
                />
                  <div className="details">
                    <span>
                      <strong>Profissional:</strong> Dr. {schedule.name}
                    </span>
                    <span>
                      <strong>Especialidade:</strong> {schedule.specialization[0].toUpperCase() + schedule.specialization.substring(1)}
                    </span>
                    <span>
                      <strong>Data da consulta (ano-mês-dia):</strong> {schedule.date}
                    </span>
                    <span>
                      <strong>Horário da consulta:</strong> {schedule.time}
                    </span>
                    <span>
                      <strong>Duração da consulta:</strong> {schedule.duration}
                    </span>
                    <span className={schedule.justification ? null : "last"}>
                      <strong>Status da consulta:</strong> {schedule.status}
                    </span>
                    {schedule.justification ? <span className="last justification">
                      <strong>Justificativa:</strong> {schedule.justification}
                    </span> : null}
                    <span className="buttons">
                      {schedule.justification ? null : <Button disabled={ moment(schedule.date).isBefore(dateString) ||
                        (Number(String((schedule.time.replace(":", ""))) < Number(hoursString)) &&
                        (moment(schedule.date).isSame(dateString)))} onClick={() => handleConfirmCancel(schedule.id)}>
                        Cancelar consulta! <TiCancel />
                      </Button>}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Container>
  );
}
