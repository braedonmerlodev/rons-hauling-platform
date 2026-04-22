import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Building2, HardHat, Recycle, CheckCircle2 } from 'lucide-react';
const SERVICES = [
  {
    title: "Residential Removal",
    desc: "From old mattresses to basement clutter, we clear it all so you can enjoy your home again.",
    icon: Home,
    items: ["Furniture & Mattresses", "Appliance Disposal", "Electronic Waste", "Yard Waste Removal"]
  },
  {
    title: "Commercial Cleanouts",
    desc: "Fast, efficient office and retail cleanouts to minimize downtime for your business operations.",
    icon: Building2,
    items: ["Office Furniture", "Bulk Trash Removal", "Inventory Liquidation", "E-Waste Recycling"]
  },
  {
    title: "Construction Debris",
    desc: "We help keep your job site clean and safe by hauling away construction and renovation materials.",
    icon: HardHat,
    items: ["Drywall & Wood", "Shingles & Roofing", "Concrete & Brick", "Tile & Scrap Metal"]
  },
  {
    title: "Eco-Disposal & Recycling",
    desc: "Our commitment to the planet. We sort items to ensure usable goods are donated and others recycled.",
    icon: Recycle,
    items: ["Donation Pickup", "Tire Recycling", "Metal Salvage", "Responsible Disposal"]
  }
];
export function ServicesPage() {
  return (
    <PublicLayout>
      <div className="bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Our Services</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether it's a single item or a multi-story warehouse, our team provides professional hauling with a focus on efficiency and environmental responsibility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow border-slate-200/60 dark:border-slate-800">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-xl">
                      <service.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm mt-1">{service.desc}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Everything you need to know about our process, pricing, and what we can take off your hands.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/50">
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Need immediate help?</h4>
                  <p className="text-sm text-emerald-800/80 dark:text-emerald-200/80 mb-4">Our support team is available Mon-Sat, 8am-6pm.</p>
                  <div className="flex items-center gap-3 font-semibold text-emerald-700 dark:text-emerald-300 underline underline-offset-4">
                    (555) 012-3456
                  </div>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">What items do you NOT take?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We cannot accept hazardous materials including paint, chemicals, solvents, asbestos, oil, or pressurized tanks. For safety reasons, we also avoid certain types of heavy medical waste.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">How is final pricing determined?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our online quotes are estimates based on your description. The final price is determined onsite by our team based on the actual volume (cubic yards) your items take up in our truck.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">Are you licensed and insured?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, ClearPath is fully licensed for commercial hauling and carries comprehensive general liability and worker's compensation insurance for your peace of mind.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">Do I need to be present for the removal?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    While we prefer you are there to confirm the quote and items, we can perform contactless removal if items are left outside and payment is arranged beforehand.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}