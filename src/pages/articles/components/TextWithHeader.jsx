import { widont } from "../../../utils/widont";

const TextWithHeader = ({ heading, paragraphs = [] }) => {
  return (
    <div className={`grid item`}>
      <div className={`text text--with-header grid__1-3`}>
        <h2 className={`text__header grid__1-1`}>{heading}</h2>
        {paragraphs.map((paragraph, index) => (
          <p className={`text__body grid__2-3`} key={`${heading}-${index}`}>
            {typeof paragraph === "string" ? widont(paragraph) : paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextWithHeader;
