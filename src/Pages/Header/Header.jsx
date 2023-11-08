import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import JobCategory from "./JobCategory/JobCategory";

const Header = () => {
  return (
    <div>
      <div className="bg-slate-100">
        <Banner />
      </div>
      <div>
        <JobCategory />
      </div>
      <div>
        <Featured />
      </div>
    </div>
  );
};

export default Header;