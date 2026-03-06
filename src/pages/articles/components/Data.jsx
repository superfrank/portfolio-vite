import { Fragment } from "react";

const Data = ({ metrics = [] }) => {
  return (
    <div className="grid item">
      {metrics.map((metric, index) => (
        <Fragment key={`outcome-metric-${index}`}>
          <p className="text__body grid__2-3">
            <span className="caption__header">{metric.label}</span>
          </p>

          <div className="image grid__2-3">
            <div className="image__inline">
              <img className="image__eight" src={metric.src} alt={metric.alt} />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Data;
