import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "1 GB storage",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "$79",
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "10 GB storage",
      "Custom integrations",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited team members",
      "Enterprise-grade analytics",
      "Dedicated account manager",
      "Unlimited storage",
      "Custom development",
      "SLA",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-primary">Pricing Plans</h1>
        <p className="text-xl text-center text-lightGray mb-12">
          Choose the perfect plan for your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col border border-neutralDark bg-neutralDark text-neutralLight transition-all duration-300 ease-in-out hover:border-primary hover:shadow-lg ${
                plan.popular ? 'border-primary shadow-md' : 'hover:shadow-primary'
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">{plan.name}</CardTitle>
                <CardDescription className="text-lightGray">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold text-center mb-6 text-primary-foreground">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-neutralLight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full transition-colors duration-300 ease-in-out ${
                    plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-neutralLight text-foreground hover:bg-secondary hover:text-white'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
      
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
