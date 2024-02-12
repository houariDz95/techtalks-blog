import Category from "./category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((cat) => (
        <Category
          key={cat._id}
          link={`/blog?s=${cat.slug}`}
          name={cat.title}
          active={currentSlug === cat.slug}
        />
      ))}
    </div>
  );
};

export default Categories;