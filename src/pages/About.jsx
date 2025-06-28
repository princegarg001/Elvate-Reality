export default function About() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('/real-estate-vector-art-c4xbckme2ta562zf.jpg')` }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-6">About Elevate Realty</h1>
        <div className="space-y-4 text-xl leading-relaxed">
          <p className="animate-slide-loop">Elevate Realty is a premium real estate firm committed to helping you find luxury homes.</p>
          <p className="animate-slide-loop">We offer a strong reputation, personalized services, and high-end property listings.</p>
          <p className="animate-slide-loop">Our mission is to elevate your living through design, location, and lifestyle.</p>
        </div>
      </div>
    </section>
  );
}
