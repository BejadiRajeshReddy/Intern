import "./App.css";

const App = () => {
  const ArrowDown = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );

  const scrollToForm = () => {
    document
      .querySelector("#apply-form")
      .scrollIntoView({ behavior: "smooth" });
  };
  const domains = [
    {
      name: "Full-Stack Development",
      description: "Build both frontend and backend for applications",
    },
    {
      name: "Frontend Development (React, Angular, Vue.js)",
      description: "Create visually stunning and user-friendly interfaces",
    },
    {
      name: "Backend Development (Node.js, Python, Java, PHP)",
      description: "Build the server-side and APIs that power applications",
    },
    {
      name: "Software Development",
      description: "Build next-gen applications and services",
    },
    {
      name: "Cloud Computing (AWS, Azure, Google Cloud)",
      description:
        "Leverage cloud platforms for scalable and reliable solutions",
    },
    {
      name: "UI/UX Design",
      description:
        "Design engaging user interfaces and optimize user experiences",
    },
    {
      name: "DevOps & Automation",
      description: "Automate workflows and improve software delivery processes",
    },
    {
      name: "Networking & IT Support",
      description: "Ensure seamless IT infrastructure and troubleshooting",
    },
    {
      name: "Database Management & SQL",
      description: "Manage and query databases for data-driven applications",
    },
  ];

  return (
    <div className="container">
      <div className="front">
        <header className="hero">
          <div className="hero-content">
            <h1 className="hero-title">TechSpira Internships</h1>
            <p className="hero-text">
              Join our dynamic team and kickstart your career with hands-on
              experience in cutting-edge technology projects.
            </p>
            <button onClick={scrollToForm}>
              Apply Now
              <ArrowDown />
            </button>
          </div>
        </header>

        <section className="card">
          <h2 className="heading">About TechSpira</h2>
          <p>
            TechSpira is a leading technology company focused on innovative
            solutions in software development, machine learning, and data
            analytics. With over 10 years of experience, we&apos;ve helped
            countless interns grow into successful tech professionals. At
            TechSpira, we believe in nurturing future talent. Our internship
            programs are designed to provide hands-on experience, bridging
            academic learning with real-world challenges. Under the leadership
            of our visionary directors, Bandu Vinodh Naidu and Vinutha Bandu, we
            strive to create an environment where creativity meets technology,
            empowering both organizations and aspiring professionals to excel.
            With a robust foundation, a team of 50–100 dedicated professionals,
            and an unwavering commitment to quality, TechSpira Technologies is
            not just a company—it’s a launchpad for technological innovation and
            professional growth.
          </p>
        </section>
      </div>

      <section className="card">
        <h2 className="heading">Our Domains</h2>
        <div className="domains-grid">
          {domains.map((domain) => (
            <div key={domain.name} className="domain-card">
              <h3 className="domain-title">{domain.name}</h3>
              <p>{domain.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply-form" className="card">
        <h2 className="heading">Apply Now</h2>
        <p>Fill out the form below to apply for our internship program</p>
        <form
          action="https://formsubmit.co/rockyrocky9526@gmail.com"
          method="POST"
          encType="multipart/form-data"
          acceptCharset="UTF-8"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="TechSpira Internship Application" />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="label">Full Name</label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-group">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="tech@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="label">Phone Number</label>
              <input
                className="input"
                type="tel"
                name="phone"
                placeholder="+91 9201 000-000"
                required
              />
            </div>

            <div className="form-group">
              <label className="label">Preferred Domain</label>
              <select className="select" name="domain" required>
                <option value="">Select domain</option>
                {domains.map((domain) => (
                  <option key={domain.name} value={domain.name}>
                    {domain.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group full-width">
              <label className="label">Resume</label>
              <input
                className="input"
                type="file"
                name="Resume"
                accept=".pdf,.doc,.docx"
                required
              />
              <small className="small">Accepted formats: PDF, DOC, DOCX</small>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
