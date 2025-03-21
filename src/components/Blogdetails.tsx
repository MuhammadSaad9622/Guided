import React from 'react';
import { Star, Share } from 'lucide-react';
import Img from '../Assets/Blog Individual - hero.png';
import Recommended from './Recomendation';
import { DentalLanding } from './DentalLanding';

function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <img
          src={Img}
          alt="Dental tools and equipment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#0c1152]  text-center mb-8">
          LOREM IPSUM IS SIMPLY DUMMY<br />
          TEXT OF THE PRINTING
        </h1>

        {/* Article Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Nov 15th, 2017</span>
            <span>•</span>
            <Share className="w-4 h-4" />
            <span>Share Post</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>

          
        </div>


      
      </div>

      <Recommended/>

<DentalLanding/>
    </div>
  );
}

export default BlogDetailPage;