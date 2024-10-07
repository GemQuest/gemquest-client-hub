import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter } from "lucide-react";
import PublicLayout from "../layouts/PublicLayout";

const teamMembers = [
  {
    name: "Remy",
    role: "Tech Lead & Stakeholder",
    bio: "Remy brings years of technical expertise and vision to guide our project's development and strategic direction.",
    skills: ["Leadership", "System Architecture", "Project Management"],
  },
  {
    name: "Amaia",
    role: "UI/UX Designer",
    bio: "Amaia crafts intuitive and visually appealing user experiences that bring our product to life.",
    skills: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    name: "Maxence",
    role: "Developer",
    bio: "Maxence turns ideas into reality with clean, efficient code and a passion for problem-solving.",
    skills: ["Full-Stack Development", "API Integration", "Performance Optimization"],
  },
];

export default function TeamMembersPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-background text-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-primary mb-8">Meet Our Team</h1>
          <p className="text-xl text-center text-lightGray mb-12">
            The talented individuals behind GemQuest{'\''}s success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="flex flex-col bg-neutralDark border-neutralDark text-neutralLight hover:border-primary transition-all duration-300 ease-in-out hover:shadow-primary hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-neutralLight flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">{member.name}</CardTitle>
                  <p className="text-secondary">{member.role}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-center mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-neutralLight hover:text-primary">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a href="#" className="text-neutralLight hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" className="text-neutralLight hover:text-primary">
                      <Twitter className="w-5 h-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
