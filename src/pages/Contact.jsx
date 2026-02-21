import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Message envoyé !");
    
    navigate("/");
  };

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleSubmit}>Envoyer</button>
    </div>
  );
}

export default Contact;