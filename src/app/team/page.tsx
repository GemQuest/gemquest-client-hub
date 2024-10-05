import React from 'react';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background text-neutralLight">
      <header className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-neutralLight">Our Team</h1>
          <p className="mt-4 text-lg">Meet the people behind GemQuest.</p>
        </div>
      </header>

      <main className="py-12">
        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-secondary">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <img
                src="/team1.jpg"
                alt="Team Member 1"
                className="mx-auto rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-bold text-neutralLight">John Doe</h3>
              <p className="text-lightGray">CEO</p>
            </div>
            <div className="text-center">
              <img
                src="/team2.jpg"
                alt="Team Member 2"
                className="mx-auto rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-bold text-neutralLight">Jane Smith</h3>
              <p className="text-lightGray">CTO</p>
            </div>
            <div className="text-center">
              <img
                src="/team3.jpg"
                alt="Team Member 3"
                className="mx-auto rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-bold text-neutralLight">Alex Johnson</h3>
              <p className="text-lightGray">COO</p>
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

export default TeamPage;
