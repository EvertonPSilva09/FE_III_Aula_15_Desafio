import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const URL_STUDENTS = "https://api-aluno.vercel.app/aluno";

export default function HomePage() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const response = await axios.get(URL_STUDENTS);
      setStudents(response.data);
    } catch (error) {
      alert("Não foi possível fazer a consulta");
    }
  }

  return (
    <div>
      <h1>Alunos Evertinho</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <h3>{student.nome}</h3>
            <p>Curso: {student.curso}</p>
            <p>Bimestre: {student.bimestre}</p>
            <button onClick={() => navigate(`/forms/${student._id}`)}>
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
