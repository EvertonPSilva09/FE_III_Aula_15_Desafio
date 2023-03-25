import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const URL_STUDENTS = "https://api-aluno.vercel.app/aluno/";

export default function StudentPage() {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchStudent();
  }, []);

  async function fetchStudent() {
    try {
      const response = await axios.get(`${URL_STUDENTS}${id}`);
      setStudent(response.data);
    } catch (error) {
      alert("Não foi possível fazer a consulta");
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
        <p>Carregando...</p>
      )}
    </div>
  );
}