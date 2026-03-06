const Text = ({ body }) => {
  return (
    <div className={`grid item`}>
      <div className={`text grid__1-3`}>
        <p className={`grid__2-3`}>{body}</p>
      </div>
    </div>
  );
};

export default Text;
