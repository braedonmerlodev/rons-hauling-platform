import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Truck, Clock } from 'lucide-react';
export function BookingPage() {
  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 flex flex-col lg:flex-row gap-16">
          {/* Left Column: Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-display font-bold">Book Your Quote</h1>
              <p className="text-lg text-muted-foreground">
                Tell us about your project. We'll provide a transparent estimate and find a time that works for you.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg text-emerald-600">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Local & Fast</h4>
                  <p className="text-sm text-muted-foreground">Same-day and next-day service often available in your area.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg text-emerald-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">No Hidden Fees</h4>
                  <p className="text-sm text-muted-foreground">Labor, transport, and disposal fees are all included in your quote.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Form */}
          <div className="flex-1">
            <Card className="border-none shadow-glass max-w-2xl">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle>Request Free Estimate</CardTitle>
                <CardDescription>Fill out the details below and we'll reach out within 2 hours.</CardDescription>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">Zip Code</Label>
                    <Input id="zip" placeholder="12345" className="bg-background" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Service Type</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select service..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Junk Removal</SelectItem>
                        <SelectItem value="commercial">Commercial Cleanout</SelectItem>
                        <SelectItem value="construction">Construction Debris</SelectItem>
                        <SelectItem value="recycling">Recycling / Donations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <div className="relative">
                      <Input id="date" type="date" className="bg-background pl-10" />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="items">Describe the items to be hauled</Label>
                  <Textarea 
                    id="items" 
                    placeholder="E.g., 3-seat sofa, old washing machine, 10 bags of yard waste..." 
                    className="min-h-[120px] bg-background"
                  />
                  <p className="text-xs text-muted-foreground">The more detail you provide, the more accurate our initial estimate will be.</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/30 border-t pt-6 flex justify-between items-center">
                <p className="text-xs text-muted-foreground max-w-[240px]">
                  By submitting, you agree to our terms of service and privacy policy.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                  Request Free Quote
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}