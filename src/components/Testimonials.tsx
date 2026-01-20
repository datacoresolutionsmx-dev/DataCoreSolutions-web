import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-100 border-t border-gray-200" id="industrias">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          La elección de los líderes de la industria
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <svg className="w-8 h-8 text-primary mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01664 21L5.01664 18C5.01664 16.8954 5.91207 16 7.01664 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.01664C5.46436 8 5.01664 8.44772 5.01664 9V11C5.01664 11.5523 4.56892 12 4.01664 12H3.01664V5H13.0166V15C13.0166 18.3137 10.3303 21 7.01664 21H5.01664Z" />
                </svg>
                <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center space-x-4 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{testimonial.author}</h5>
                  <span className="text-sm text-gray-500 uppercase tracking-wide text-xs">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;