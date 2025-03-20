import React from 'react';

const Recommended = () => {
  const articles = [
    {
      date: 'Jun 26th, 2017',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa vel arcu feugiat...',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80'
    },
    {
      date: 'May 11th, 2017',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa vel arcu feugiat...',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80'
    },
    {
      date: 'Mar 20th, 2017',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac massa vel arcu feugiat...',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0c1152]  mb-12">
          RECOMMENDED FOR YOU...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white text-sm mb-2">{article.date}</p>
                  <h3 className="text-white font-medium mb-2">{article.title}</h3>
                  <p className="text-white/80 text-sm">{article.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;