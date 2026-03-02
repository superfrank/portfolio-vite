const FeaturedBadge = () => {
  return (
    <svg
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <path
          id="featured-badge"
          d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"
        />
      </defs>
      <circle cx="80" cy="80" r="58" />
      <text textLength="364.42" lengthAdjust="spacing">
        <textPath href="#featured-badge" startOffset="0%">
          Featured project • Featured project •&nbsp;
        </textPath>
      </text>
    </svg>
  );
};

export default FeaturedBadge;
