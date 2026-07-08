import Link from 'next/link';
export default function ThankYou() {
  return (
    <div className="max-w-xl mx-auto py-20 text-center px-4">
      <h1 className="font-serif text-4xl mb-4">Thank You!</h1>
      <p className="text-lg mb-8">Your enquiry has been received. Our team will contact you shortly.</p>
      <a href="https://wa.me/919845011779" target="_blank" className="inline-block bg-green-500 text-white px-6 py-3 rounded font-bold hover:bg-green-600 transition">Chat on WhatsApp</a>
      <Link href="/" className="block mt-4 underline">Back to Home</Link>
    </div>
  );
}