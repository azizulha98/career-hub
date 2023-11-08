import { BiSolidLocationPlus, BiDollarCircle } from 'react-icons/bi';
const Feature = ({ feature }) => {
  const { id, company_name, experiences, job_description, job_responsibility, job_title, job_type, location, logo, remote_or_onsite, salary, educational_requirements, contact_information, } = feature
  console.log(feature);

  return (
    <div>
      <div className="w-full shadow-md px-10 py-5 space-y-4">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="space-y-4">
          <h2>{job_title}</h2>
          <p>{company_name}</p>
          <div className="space-x-3">
            <span className="bg-base-200 rounded-md py-1 px-4 shadow">{remote_or_onsite}</span>
            <span className="bg-base-200 rounded-md py-1 px-4 shadow">{job_type}</span>
          </div>
          <div className="flex space-x-4">
            <div className='flex items-center space-x-1'>
              <span><BiSolidLocationPlus /></span>
              <span>{location}</span>
            </div>
            <div className='flex items-center space-x-1'>
              <span><BiDollarCircle /></span>
              <span>{salary}</span>
            </div>
          </div>
          <button className='btn btn-sm btn-primary'>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;