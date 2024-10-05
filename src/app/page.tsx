import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Award, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground">
            Welcome to GemQuest
          </h1>
          <p className="mt-4 text-xl text-primary-foreground/90">
            Transform waiting times into a rewarding experience with our innovative platform.
          </p>
          <Link href="/plans">
            <Button className="mt-8 bg-neutralDark text-white hover:bg-secondary hover:shadow-lg transition-colors duration-300" size="lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <main className="py-12">
        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-secondary">Our Features</h2>
          <p className="mt-2 text-muted-foreground">
            Discover how GemQuest can revolutionize customer engagement during wait times.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="flex flex-col bg-neutralDark border border-neutralDark hover:border-primary hover:shadow-lg  hover:shadow-primary  transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-primary">
                  <Clock className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                  <span className="break-words">Experience Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-neutralLight">
                  Manage and enhance customer experiences with ease. Our intuitive platform helps you create memorable moments during wait times.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-neutralDark border border-neutralDark hover:border-primary hover:shadow-lg hover:shadow-primary transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-primary">
                  <Award className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                  <span>NFT Integration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-neutralLight">
                  Create exclusive NFTs to reward and engage customers, turning waiting time into a valuable, interactive experience.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-neutralDark border border-neutralDark hover:border-primary hover:shadow-lg hover:shadow-primary transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-primary">
                  <Users className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                  <span>Employee Roles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-neutralLight">
                  Assign specific roles to employees, improving coordination and ensuring smooth operations at all levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className=" bg-lightGray py-20 mt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-secondary">How It Works</h2>
            <p className="mt-2 text-muted-foreground">
              GemQuest turns waiting time into an engaging experience in three simple steps.
            </p>
            <ol className="mt-8 space-y-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mr-4 mt-0.5">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-primary">Set Up</h3>
                  <p className="text-muted-foreground">
                    Quickly configure your GemQuest account and customize it to suit your business needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mr-4 mt-0.5">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-primary">Engage</h3>
                  <p className="text-muted-foreground">
                    Your customers participate in interactive games and challenges while they wait, making the experience more enjoyable.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mr-4 mt-0.5">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-primary">Reward</h3>
                  <p className="text-muted-foreground">
                    Offer NFT rewards to your customers, increasing their satisfaction and loyalty.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background text-lightGray py-6 mt-12 border-t-4 border-primary">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 GemQuest. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-secondary hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-secondary hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-secondary hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
