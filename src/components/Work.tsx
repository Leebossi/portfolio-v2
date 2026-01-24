import { useTranslation } from "react-i18next";
import workData from "../data/work.json";

const Work = () => {
  const { t } = useTranslation();
  const workEntries = Object.entries(workData);
  return (
    <div id="work">
      <h1>{t("work.title")}</h1>
      <div className="container">
        {workEntries.map(([key, job]) => (
          <div key={key} className="card">
            <h3>
              {job.position} - {job.company}
            </h3>
            <h4>
              {job.startDate} - {job.endDate || "Present"}
            </h4>
            <ul>
              {job.responsibilities.map((_resp, index) => (
                <li key={index}>{t(`work.${index+1}`)}</li>
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
