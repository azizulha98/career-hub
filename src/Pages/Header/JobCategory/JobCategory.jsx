import { useEffect, useState } from "react";
import Category from "./Category";

const JobCategory = () => {
  const [jobCategories, setJobCategories] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setJobCategories(data))
  }, [])
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 my-5 ">
      <div className="text-center space-y-4">
        <h2 className="text-4xl">Job Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 my-5 md:ps-16 lg:px-32">
        {
          jobCategories.map(category => <Category key={category.id} category={category} />)
        }
      </div>
    </div>
  );
};

export default JobCategory;