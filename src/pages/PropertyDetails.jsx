import { useParams } from 'react-router-dom';

export default function PropertyDetails() {
  const { id } = useParams();

  return (
    <section className="pt-36 px-10 pb-20">
      <h1 className="text-4xl mb-6 font-semibold">Property Details - ID: {id}</h1>
      <img src="/house.jpg" alt="Property" className="w-full h-96 object-cover rounded-lg mb-6" />
      <p className="text-gray-700 text-lg">
        This luxury property includes 3 spacious bedrooms, 2 bathrooms, a modern kitchen, and a large backyard.
      </p>
    </section>
  );
}
