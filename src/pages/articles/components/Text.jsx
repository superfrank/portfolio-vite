const Text = ({ paragraphs }) => {
  return (
    <div className={`grid item`}>
      <div className={`text grid__1-3`}>
        <p className={`grid__2-3`}>
          {paragraphs.map((paragraph, index) => (
            <p className={`text__body grid__2-3`} key={`${index}`}>
              {paragraph}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Text;
