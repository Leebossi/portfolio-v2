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
                <li key={index}>{t(`work.${index + 1}`)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href="/cv.html" target="_blank" rel="noopener noreferrer">
        <button className="cv-button">View CV</button>
      </a>
    </div>
  );
};

export default Work;
