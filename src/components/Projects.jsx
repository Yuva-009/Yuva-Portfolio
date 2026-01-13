export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="card">
        <h3>Student Management System</h3>
        <p>
          Full-stack application using Spring Boot, JWT Security, and React.
          Implemented role-based access control and CRUD operations.
        </p>
      </div>

      <div className="card">
        <h3>eCoolie – Local Service Finder</h3>
        <p>
          React + Firebase app connecting local service providers with users
          in real-time based on location.
        </p>
      </div>
    </section>
  );
}
