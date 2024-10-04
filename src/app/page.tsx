import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-neutralLight">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-neutralLight">
            Welcome to GemQuest
          </h1>
          <p className="mt-4 text-lg">
            Gamify wait times and enhance experiences with our unique solution.
          </p>
        </div>
      </header>

      <main className="py-12">
        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-secondary">Our Features</h2>
          <p className="mt-2 text-neutralLight">
            Discover how we transform waiting into an engaging experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-neutralDark rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-secondary">Experience Management</h3>
              <p className="mt-4 text-lightGray">Manage and enhance customer experiences with ease.</p>
            </div>
            <div className="p-6 bg-neutralDark rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-secondary">NFT Integration</h3>
              <p className="mt-4 text-lightGray">Integrate NFTs to reward and engage your customers.</p>
            </div>
            <div className="p-6 bg-neutralDark rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-secondary">Employee Roles</h3>
              <p className="mt-4 text-lightGray">Assign roles and manage employees effectively.</p>
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

export default HomePage;
