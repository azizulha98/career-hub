import bannerImg from '../../../assets/images/user.png'
const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 mb-2">
      <div className='flex flex-col-reverse md:flex-row justify-between items-center md:px-10 lg:px-24'>
        <div className='md:w-1/2 space-y-4 my-5 md:my-0'>
          <div className='text-xl md:text-3xl lg:text-5xl flex md:flex-col md:space-y-1 font-bold'>
            <span>One Step</span>
            <span>Closer To Your</span>
            <span className='text-lime-800'>Dream Job</span>
          </div>
          <p>Explore thousands of job opportunities with all the information you need.
            Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="btn btn-sm btn-primary">Get Started</button>
        </div>
        <div className='md:w-1/2'>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;