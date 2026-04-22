import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Truck, Leaf, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
export function HomePage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Pristine house exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Reclaim Your Space with <span className="text-emerald-400">ClearPath</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              Professional, eco-friendly hauling and junk removal services for your home or business. Fast, reliable, and always responsible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg h-14 px-8 shadow-lg shadow-emerald-500/20">
                <Link to="/book">Get Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg h-14 px-8">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-32">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Our Process</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold">Junk Removal Made Simple</h3>
              <p className="text-muted-foreground text-lg">We handle the heavy lifting while you enjoy your newly cleared space.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PhoneCall className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold">1. Schedule</h4>
                  <p className="text-muted-foreground leading-relaxed">Book a quote online or give us a call. We offer flexible scheduling to fit your busy life.</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold">2. We Haul</h4>
                  <p className="text-muted-foreground leading-relaxed">Our professional team arrives on time, provides a final quote, and clears everything out.</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold">3. Eco-Dispose</h4>
                  <p className="text-muted-foreground leading-relaxed">We don't just dump. We sort, donate, and recycle up to 60% of what we haul away.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-32">
            <div className="text-center mb-16 space-y-4">
              <h3 className="text-4xl md:text-5xl font-display font-bold">Transparent Tiered Pricing</h3>
              <p className="text-muted-foreground text-lg">No hidden fees. You only pay for the space you use in our trucks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1/4 Truck */}
              <Card className="border-none shadow-soft hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-medium text-muted-foreground uppercase">The Quick Load</CardTitle>
                  <div className="py-4">
                    <span className="text-5xl font-bold">$149</span>
                    <span className="text-muted-foreground ml-1">avg.</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="text-center font-bold text-emerald-600 mb-4">1/4 TRUCK VOLUME</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Up to 3 cubic yards</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Equivalent to 1 sofa + chairs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Small appliance removal</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Loading & clean-up included</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                    <Link to="/book">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
              {/* 1/2 Truck */}
              <Card className="border-2 border-emerald-500 shadow-xl scale-105 relative z-10 flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Most Popular</div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-medium text-muted-foreground uppercase">Half Capacity</CardTitle>
                  <div className="py-4">
                    <span className="text-5xl font-bold">$299</span>
                    <span className="text-muted-foreground ml-1">avg.</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="text-center font-bold text-emerald-600 mb-4">1/2 TRUCK VOLUME</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Up to 7 cubic yards</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Small room cleanout</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Multiple bulky items</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Garage/Storage unit space</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                    <Link to="/book">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
              {/* Full Truck */}
              <Card className="border-none shadow-soft hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-medium text-muted-foreground uppercase">The Whole Lot</CardTitle>
                  <div className="py-4">
                    <span className="text-5xl font-bold">$549</span>
                    <span className="text-muted-foreground ml-1">avg.</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="text-center font-bold text-emerald-600 mb-4">FULL TRUCK VOLUME</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Up to 15 cubic yards</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Full garage cleanout</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Commercial basement empty</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Maximum value for large jobs</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                    <Link to="/book">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}