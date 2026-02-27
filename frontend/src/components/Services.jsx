function Services() {
  return (
    <section className="container py-5 text-center">
      <h2 className="mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Web Development</h5>
            <p>Responsive and scalable websites.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>UI/UX Design</h5>
            <p>Modern and aesthetic interfaces.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Deployment</h5>
            <p>Production-ready applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;