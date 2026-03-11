const Quote = ({ body, attribution, role }) => {
  return (
    <div className={`grid item`}>
      <div className={`quote text grid__1-3`}>
        <p className={`grid__2-3`}>
          <p className="quote__body">{body}</p>
          <p className="quote__attribution">{attribution}</p>
          <p className="quote__role">{role}</p>
        </p>
      </div>
    </div>
  );
};

export default Quote;
