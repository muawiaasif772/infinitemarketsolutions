import "./blogsection.css";

const BlogSection = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&family=Roboto:wght@700&family=Manrope:wght@400&family=Nunito&display=swap"
        rel="stylesheet"
      />
      
      <section className="w-full !py-[50px] px-4 md:py-12 md:px-2  lg:!py-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-10 w-full  md:min-h-[600px] lg:min-h-[650px]">
            {/* Left Side */}
            <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col h-full">
              <BlogHeader  />
              <div className=" ">
                <BlogCard
                  image="https://cdn.builder.io/api/v1/image/assets/TEMP/3320e540c05eb395fb9a2c100bdddd79453f302a"
                  title="Artificial Intelligence"
                  description="Shaping the Future with Smart Technology and Innovation"
                  date="21 Feb 2025"
                  className="h-full !-mt-4 max-lg:!-mt-8 !max-h-2/4" 
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-7/12 lg:w-6/12 flex flex-col !gap-6">
              <div className="h-3/7">
                <BlogCard
                  image="https://cdn.builder.io/api/v1/image/assets/TEMP/61514d9dd4a1524392b1ac8cf20a38e35f70a7e9"
                  title="Artificial Intelligence"
                  description="Shaping the Future with Smart Technology and Innovation"
                  date="25 Feb 2025"
                  className="h-full"
                />
              </div>
              <div className="h-2/6 max-lg:!pb-9">
                <BlogCard
                  image="https://cdn.builder.io/api/v1/image/assets/TEMP/57fa450342ef257977d45fe9c0e94c080c5df653"
                  title="Artificial Intelligence"
                  description="Shaping the Future with Smart Technology and Innovation"
                  date="31 Feb 2025"
                  className="h-full max-lg:!pb-12  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const BlogHeader = () => {
  return (
    <header className="mb-5">
      <h1 className="mb-3 !text-[25px]  md:text-xl font-normal font-['Manrope'] text-black">
        Recent Blogs
      </h1>
      <p className=" !text-[16px] md:text-lg font-['Nunito'] text-black max-w-full md:max-w-md leading-relaxed">
        Discover Engaging Stories, Expert Insights, and the Latest Trends – Your
        Gateway to Knowledge and Inspiration!
      </p>
      <ViewAllLink />
    </header>
  );
};

const BlogCard = ({ image, title, description, date, className }) => {
  return (
    <article className={`overflow-hidden relative rounded-2xl md:rounded-3xl ${className}`}>
      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white z-10">
        {/* Title & Date in Same Line */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg md:text-xl font-['Manrope']">
            {title}
          </h2>
          <time className="text-sm md:text-base font-['Nunito'] opacity-80">
            {date}
          </time>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base font-['Nunito'] tracking-wide text-white">
          {description}
        </p>
      </div>
    </article>
  );
};

const ViewAllLink = () => {
  return (
    <div className="mt-2 flex items-center  font-['Ubuntu'] cursor-pointer">
      <span className="text-lg !text-[#01a2fa] md:text-xl">View all</span>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className=" !ml-3"
      >
        <path 
          d="M14 5L21 12M21 12L14 19M21 12H3" 
          stroke="#01a2fa" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default BlogSection;