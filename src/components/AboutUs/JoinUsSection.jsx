// JoinUsSection.jsx
export default function JoinUsSection() {
    return (
        <section className="py-12 bg-orange-100 text-center">
            <h2 className="text-3xl font-semibold text-orange-600">Join Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700">
                Follow us, cook with us, and share your food stories. Together, let’s bring deliciousness to your everyday life.
            </p>
            <a
                href="/contact"
                className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
            >
                Contact Us
            </a>
        </section>
    );
}
