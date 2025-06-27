import "/src/css/BackButton.css";

import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="backButton" onClick={() => navigate(-1)}>
      &#11207; Volver
    </button>
  );
}
