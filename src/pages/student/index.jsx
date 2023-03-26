import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const URL_STUDENTS = "https://api-aluno.vercel.app/aluno/";

export default function StudentPage() {
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");
  const [studentRegistration, setStudentRegistration] = useState("");
  const [studentCourse, setStudentCourse] = useState("");
  const [studentPeriod, setStudentPeriod] = useState("");

  useEffect(() => {
    validateAndFetchStudent(id);
  }, []);

  async function validateAndFetchStudent(id) {
    if (!id) {
      const response = await axios.get(URL_STUDENTS);
      return response;
    } else {
      return fetchStudent(id);
    }
  }

  async function fetchStudent() {
    try {
      const response = await axios.get(`${URL_STUDENTS}${id}`);
      setStudent(response.data);
    } catch (error) {
      alert("Não foi possível fazer a consulta");
    }
  }

  function clearForm() {
    setStudentName("");
    setStudentRegistration("");
    setStudentCourse("");
    setStudentPeriod("");
  }

  async function createStudent(event) {
    event.preventDefault();
    try {
      await axios.post(URL_STUDENTS, {
        nome: studentName,
        matricula: studentRegistration,
        curso: studentCourse,
        bimestre: studentPeriod,
      });
      clearForm();
      alert("Aluno cadastrado com sucesso")
    } catch (error) {
      alert("Não foi possível cadastrar o aluno");
    }
  }

  return (
    <div>
      {student ? (
        <>
          <h1>{student.nome}</h1>
          <p>Curso: {student.curso}</p>
          <p>Bimestre: {student.bimestre}</p>
        </>
      ) : (
        <div>
        <form onSubmit={createStudent}>
          <input
            type="text"
            placeholder="Nome"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Matricula"
            value={studentRegistration}
            onChange={(event) => setStudentRegistration(event.target.value)}
          />
          <input
            type="text"
            placeholder="Curso"
            value={studentCourse}
            onChange={(event) => setStudentCourse(event.target.value)}
          />
          <input
            type="text"
            placeholder="Bimestre"
            value={studentPeriod}
            onChange={(event) => setStudentPeriod(event.target.value)}
          />
          <input type="submit" value={"Cadastrar"} />
          <button onClick={() => navigate('/')}>Voltar</button>
        </form>
        </div>
      )}
    </div>
  );
}
