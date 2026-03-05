const ArticleMediaSplitVideo = ({
  leftVideo,
  rightVideo,
  rowClassName = "",
}) => {
  const rowClasses = ["grid", "item", rowClassName].filter(Boolean).join(" ");

  return (
    <div className={rowClasses}>
      <div className="image image__mini grid__2-2">
        <div className="image__inline">
          <video
            className="video"
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            poster={leftVideo.poster}
          >
            {leftVideo.mp4 && <source src={leftVideo.mp4} type="video/mp4" />}
            {leftVideo.webm && (
              <source src={leftVideo.webm} type="video/webm" />
            )}
          </video>
        </div>
      </div>

      <div className="image grid__3-4 image__background image__background--brand">
        <div className="image__container image__container__mobile">
          <div className="image__mask--brand--mobile">
            <video
              className="image__floating image__floating__mobile video"
              preload="auto"
              playsInline
              autoPlay
              loop
              muted
              poster={rightVideo.poster}
            >
              {rightVideo.mp4 && (
                <source src={rightVideo.mp4} type="video/mp4" />
              )}
              {rightVideo.webm && (
                <source src={rightVideo.webm} type="video/webm" />
              )}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMediaSplitVideo;
