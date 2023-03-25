import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home do Evertinho</h1>
      <button onClick={() => navigate("/forms")}>Editar</button>
      <Link to="/forms">Editar</Link>
    </div>
  );
}
