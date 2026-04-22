import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
interface PublicLayoutProps {
  children: React.ReactNode;
}
export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-emerald-500 p-1.5 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                ClearPath <span className="text-emerald-600">Hauling</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <Link to="/" className="text-foreground/80 hover:text-emerald-600 transition-colors">Home</Link>
              <Link to="/services" className="text-foreground/80 hover:text-emerald-600 transition-colors">Services</Link>
              <Link to="/book" className="text-foreground/80 hover:text-emerald-600 transition-colors">Pricing</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle className="relative top-0 right-0" />
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link to="/book">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-emerald-600" />
                <span className="text-xl font-bold">ClearPath</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Eco-friendly junk removal and professional hauling services. We clear the clutter so you can reclaim your space.
              </p>
              <div className="flex space-x-4 pt-2">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-emerald-600 cursor-pointer" />
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-emerald-600 cursor-pointer" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-emerald-600 cursor-pointer" />
              </div>
            </div>
            {/* Column 2: Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-emerald-600">Residential Removal</Link></li>
                <li><Link to="/services" className="hover:text-emerald-600">Commercial Cleanouts</Link></li>
                <li><Link to="/services" className="hover:text-emerald-600">Construction Debris</Link></li>
                <li><Link to="/services" className="hover:text-emerald-600">Appliance Recycling</Link></li>
              </ul>
            </div>
            {/* Column 3: Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-emerald-600">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-600">Pricing Guide</a></li>
                <li><a href="#" className="hover:text-emerald-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-600">Terms of Service</a></li>
              </ul>
            </div>
            {/* Column 4: Newsletter */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">Get tips on decluttering and special offers.</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-secondary text-secondary-foreground border border-input rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button size="sm" className="bg-emerald-600 text-white">Join</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2024 ClearPath Hauling Platform. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Licensed & Fully Insured</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}