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

  async function deleteStudent(id) {
    event.preventDefault();
    if (confirm("Deseja realmente excluir o aluno?")) {
      try {
        await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`);
        fetchStudents();
      } catch (error) {
        alert("Não foi possível excluir o aluno");
      }
    }
  }

  return (
    <div>
      <h1>Alunos do Evertinho</h1>
      <Link to={"/student/"}>
        <button>Cadastrar novo</button>
      </Link>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <h3>{student.nome}</h3>
            <p>Curso: {student.curso}</p>
            <p>Bimestre: {student.bimestre}</p>
            <Link to={`/student/${student._id}`}>
              <button>Editar</button>
            </Link>
            <button onClick={() => deleteStudent(student._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
