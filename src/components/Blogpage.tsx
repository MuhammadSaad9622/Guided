
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample blog data
const blogPosts = Array(9).fill({
  date: "Jan 15th, 2017",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa vel arcu feugiat...",
  image:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80",
});

function Blogpage() {
  const navigate = useNavigate();

  // Scroll to top when component mounts


    // Try useLayoutEffect first
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
  
    // Fallback to useEffect if needed
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="flex justify-start gap-8 mb-12">
          <select className="bg-transparent border-none text-gray-600 focus:outline-none cursor-pointer">
            <option>Category ▾</option>
          </select>
          <select className="bg-transparent border-none text-gray-600 focus:outline-none cursor-pointer">
            <option>Date ▾</option>
          </select>
          <select className="bg-transparent border-none text-gray-600 focus:outline-none cursor-pointer">
            <option>Popularity ▾</option>
          </select>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="aspect-w-16 aspect-h-9 bg-gray-200 cursor-pointer"
                onClick={() => navigate("/BlogDetailPage")}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-[#0c1152]  text-white">
                <p className="text-sm mb-2">{post.date}</p>
                <h3 className="text-lg font-medium mb-2">{post.title}</h3>
                <p className="text-sm opacity-80">{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          {[].map((page, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-full 
                ${page === 1 ? "bg-[#0c1152]  text-white" : "hover:bg-gray-200 text-gray-600"}`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogpage;