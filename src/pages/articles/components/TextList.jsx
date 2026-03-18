const TextList = ({ intro, items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="grid item">
      <div className="text text--list grid__1-3">
        {intro ? <p className="text__body grid__2-3">{intro}</p> : null}

        <ol className="text-list text__body grid__2-3">
          {items.map((item, index) => (
            <li className="text-list__item" key={`text-list-item-${index}`}>
              <span className="text-list__question">{item.question}</span>
              {item.answer ? (
                <>
                  <br />
                  <strong className="text-list__answer">{item.answer}</strong>
                </>
              ) : null}
              {item.quote ? (
                <>
                  <br />
                  <span className="text-list__quote">{item.quote}</span>
                </>
              ) : null}
              {item.attribution ? (
                <>
                  <br />
                  <span className="text-list__attribution">
                    {item.attribution}
                  </span>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TextList;
