const VideoStepsLarge = ({
  steps = [],
  preload = "metadata",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const stepItems = steps.slice(0, 3);
  const count = stepItems.length;

  if (count < 2 || count > 3) return null;

  return (
    <div className="grid item">
      <div
        className={`image grid__1-4 image__background image__background--brand image-steps-large image-steps-large--${count}`}
      >
        <div
          className="image-steps-large__desktop"
          style={{ "--step-count": count }}
        >
          {stepItems.map((step, index) => (
            <div
              className="image-steps-large__desktop-item"
              key={`step-desktop-${index}`}
            >
              <div className="image__container image__container--phone image-steps-large__container">
                <div className="image__mask image__mask--brand-phone-top">
                  <video
                    className="image__floating image__floating--phone"
                    preload={preload}
                    playsInline={playsInline}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    poster={step.poster}
                    aria-label={step.alt}
                  >
                    {step.mp4 && <source src={step.mp4} type="video/mp4" />}
                    {step.webm && <source src={step.webm} type="video/webm" />}
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="image-steps-large__mobile">
          <div className="image__container image__container--phone image-steps-large__container">
            <div className="image__mask image__mask--brand-phone">
              <div className="image-steps-large__mobile-stack">
                {stepItems.map((step, index) => (
                  <video
                    className={`image__floating image__floating--phone image-steps-large__mobile-image image-steps-large__mobile-image--${index + 1}`}
                    key={`step-mobile-${index}`}
                    preload={preload}
                    playsInline={playsInline}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    poster={step.poster}
                    aria-label={step.alt}
                  >
                    {step.mp4 && <source src={step.mp4} type="video/mp4" />}
                    {step.webm && <source src={step.webm} type="video/webm" />}
                  </video>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStepsLarge;
