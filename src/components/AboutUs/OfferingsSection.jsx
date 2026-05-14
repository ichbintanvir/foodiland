// OfferingsSection.jsx
export default function OfferingsSection() {
    return (
        <section className="py-12 bg-orange-50">
            <h2 className="text-3xl font-semibold text-center text-orange-600">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto text-gray-700">
                <div className="p-6 bg-white rounded-lg shadow">🍲 Tasty Recipes: From quick breakfasts to indulgent desserts.</div>
                <div className="p-6 bg-white rounded-lg shadow">👩‍🍳 Cooking Tips: Practical advice to help you master your kitchen.</div>
                <div className="p-6 bg-white rounded-lg shadow">📝 Food Blog: Stories, guides, and insights into the world of food.</div>
                <div className="p-6 bg-white rounded-lg shadow">📸 Community Engagement: Join us on Instagram @foodieland to share your creations.</div>
            </div>
        </section>
    );
}
