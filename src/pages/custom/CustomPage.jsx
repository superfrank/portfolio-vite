import { useParams } from "react-router-dom";

const CustomPage = () => {
  const { customSlug } = useParams();

  return (
    <main id="top" className="page-custom">
      <div className="page-custom__container">
        <h1 className="page-custom__title">Custom: {customSlug}</h1>
      </div>
    </main>
  );
};

export default CustomPage;
