import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ScholarshipHub() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 text-gray-800">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Scholarship Hub</h1>
        <p className="text-lg">Your Gateway to Fully Funded Opportunities Worldwide</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <Card key={scholarship.id} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{scholarship.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{scholarship.country}</p>
              <p className="text-sm mb-4">{scholarship.description}</p>
              <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Apply Now</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-12 text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">Get Notified About New Scholarships</h3>
        <p className="mb-4 text-gray-700">Subscribe to receive weekly updates right to your inbox.</p>
        <div className="flex gap-2 justify-center">
          <Input type="email" placeholder="Enter your email" className="w-2/3" />
          <Button>Subscribe</Button>
        </div>
      </section>
    </main>
  );
}

const scholarships = [
  {
    id: 1,
    title: "DAAD Helmut-Schmidt-Programme",
    country: "Germany",
    description: "Fully funded master's scholarships in public policy and governance.",
    link: "https://www.daad.de/en/"
  },
  {
    id: 2,
    title: "Erasmus Mundus Joint Masters",
    country: "Europe",
    description: "Study in 2-3 countries with all expenses covered.",
    link: "https://www.eacea.ec.europa.eu/scholarships/emjmd-catalogue_en"
  },
  {
    id: 3,
    title: "Chevening Scholarships",
    country: "United Kingdom",
    description: "UK government scholarships for global leaders.",
    link: "https://www.chevening.org/"
  }
];
