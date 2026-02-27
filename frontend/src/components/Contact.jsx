import { useState } from "react";
import axios from "axios";

function Contact() {
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/contact", {
      name: e.target.name.value,
      email: e.target.email.value
    });

    setResponse(res.data.message);
  };

  return (
    <section className="container py-5 text-center">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="name" placeholder="Name" required />
        <input className="form-control mb-3" name="email" type="email" placeholder="Email" required />
        <button className="btn btn-primary">Send</button>
      </form>
      <p className="mt-3">{response}</p>
    </section>
  );
}

export default Contact;