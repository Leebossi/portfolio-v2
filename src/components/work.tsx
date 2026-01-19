import workData from "../data/work.json";

const Work = () => {
  const workEntries = Object.entries(workData);
  return (
    <div id="work">
      <h1>Work Experience</h1>
      <div className="container">
        {workEntries.map(([key, job]) => (
          <div key={key} className="card">
            <h2>
              {job.position} - {job.company}
            </h2>
            <h4>
              {job.startDate} - {job.endDate || "Present"}
            </h4>
            <ul>
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className="cv-button">
        <a
          href="/src/assets/docs/Leevi_Ossi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
      </button>
    </div>
  );
};

export default Work;
