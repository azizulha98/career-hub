import { useEffect, useState } from "react";
import Feature from "./Feature";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch(`jobs.json`)
      .then(res => res.json())
      .then(data => setFeatured(data))
  }, [])
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 my-5">
      <div className="text-center space-y-4 mb-5">
        <h2 className="text-4xl">Featured Jobs</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-5">
        {
          featured.map(feature => <Feature key={feature.id} feature={feature} />)
        }
      </div>
    </div>
  );
};

export default Featured;