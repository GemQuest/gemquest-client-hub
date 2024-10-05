import React from 'react';

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-background text-neutralLight">
      <header className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-neutralLight">Our Plans</h1>
          <p className="mt-4 text-lg">Choose the perfect plan for your needs.</p>
        </div>
      </header>

      <main className="py-12">
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutralDark rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-secondary">Basic Plan</h2>
              <p className="mt-4 text-lightGray">Includes basic features for small businesses.</p>
              <p className="mt-4 text-2xl font-bold">$49/month</p>
            </div>
            <div className="p-6 bg-neutralDark rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-secondary">Pro Plan</h2>
              <p className="mt-4 text-lightGray">Ideal for medium-sized enterprises with more advanced features.</p>
              <p className="mt-4 text-2xl font-bold">$149/month</p>
            </div>
            <div className="p-6 bg-neutralDark rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-secondary">Enterprise Plan</h2>
              <p className="mt-4 text-lightGray">Tailored for large organizations requiring custom solutions.</p>
              <p className="mt-4 text-2xl font-bold">Contact Us</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutralDark py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lightGray">© 2024 GemQuest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PlansPage;
