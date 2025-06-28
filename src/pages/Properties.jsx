export default function Properties() {
  const images = [
    "public/OIP (1).jpeg",
    "public/OIP (2).jpeg",
    "public/OIP (3).jpeg",
    "public/OIP (4).jpeg",
    "public/OIP (5).jpeg",
    "public/OIP (6).jpeg",
  ];

  return (
    <section
      className="pt-36 px-6 pb-20 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url('/pngtree-building-real-estate-blue-picture-image_2444539.jpg')` }}
    >
    
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white inline-block bg-black bg-opacity-60 px-8 py-4 rounded-lg">
          All Properties
        </h1>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white bg-opacity-90 backdrop-blur"
          >
            <img src={img} alt="Property" className="w-full h-48 object-cover" />
            <div className="p-4 text-animate">
              <h3 className="text-xl font-bold text-gray-800">
                Property #{i + 1}
              </h3>
              <p className="text-gray-600">
                Price: ${(i + 1) * 1000000}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
