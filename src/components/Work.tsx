import { useTranslation } from "react-i18next";
import workData from "../data/work.json";
import i18n from "../i18n";

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
              {t("work.position")} - {job.company}
            </h3>
            <h4>
              {t(`months.${job.startMonth}`)} {job.startYear} - {t(`months.${job.endMonth}`)} {job.endYear}
            </h4>
            <ul>
              {job.responsibilities.map((_resp, index) => (
                <li key={index}>{t(`work.${index + 1}`)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href={i18n.language === "en" ? "/cv-en.html" : "/cv-fi.html"} target="_blank" rel="noopener noreferrer">
        <button className="cv-button">{t("work.viewCV")}</button>
      </a>
    </div>
  );
};

export default Work;
