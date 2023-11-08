const Category = ({ category }) => {
  const { availability, category_name, logo } = category;
  return (
    <div className="">
      <div className="shadow-md text-center flex flex-col items-center py-5 rounded-md space-y-4">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div>
          <h2>{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;