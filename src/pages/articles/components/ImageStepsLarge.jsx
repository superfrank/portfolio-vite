const ImageStepsLarge = ({ steps = [] }) => {
  const stepItems = steps.slice(0, 4);
  const count = stepItems.length;

  if (count < 2 || count > 4) return null;

  return (
    <div className="grid item">
      <div
        className={`image grid__1-4 image__background image__background--brand image-steps-large image-steps-large--${count}`}
      >
        <div
          className="image-steps-large__desktop"
          style={{ "--step-count": count }}
        >
          {steps.map((step, index) => (
            <div
              className="image-steps-large__desktop-item"
              key={`step-desktop-${index}`}
            >
              <div className="image__container image__container--phone image-steps-large__container">
                <div className="image__mask image__mask--brand-phone-top">
                  <img
                    className="image__floating image__floating--phone"
                    src={step.src}
                    alt={step.alt}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="image-steps-large__mobile">
          <div className="image__container image__container--phone image-steps-large__container">
            <div className="image__mask image__mask--brand-phone">
              <div className="image-steps-large__mobile-stack">
                {steps.map((step, index) => (
                  <img
                    className={`image__floating image__floating--phone image-steps-large__mobile-image image-steps-large__mobile-image--${index + 1}`}
                    key={`step-mobile-${index}`}
                    src={step.src}
                    alt={step.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageStepsLarge;
