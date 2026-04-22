import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Truck, Clock, Loader2 } from 'lucide-react';
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  zipCode: z.string().min(5, "Valid zip code required"),
  serviceType: z.string().min(1, "Please select a service type"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  itemsDescription: z.string().min(10, "Please provide a bit more detail (min 10 chars)"),
});
type BookingFormValues = z.infer<typeof bookingSchema>;
export function BookingPage() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: "residential",
      preferredDate: new Date().toISOString().split('T')[0],
    }
  });
  const onSubmit = async (data: BookingFormValues) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Quote Request Sent!", {
          description: "We'll get back to you within 2 hours with an estimate.",
        });
        reset();
      } else {
        toast.error("Failed to send request", {
          description: result.error || "An unexpected error occurred.",
        });
      }
    } catch (error) {
      toast.error("Network Error", {
        description: "Please check your connection and try again.",
      });
    }
  };
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="pt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" {...register('name')} className="bg-background" />
                      {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" {...register('email')} className="bg-background" />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 000-0000" {...register('phone')} className="bg-background" />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input id="zipCode" placeholder="12345" {...register('zipCode')} className="bg-background" />
                      {errors.zipCode && <p className="text-xs text-destructive">{errors.zipCode.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Service Type</Label>
                      <Select onValueChange={(val) => setValue('serviceType', val)} defaultValue="residential">
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
                      {errors.serviceType && <p className="text-xs text-destructive">{errors.serviceType.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <div className="relative">
                        <Input id="preferredDate" type="date" {...register('preferredDate')} className="bg-background pl-10" />
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                      {errors.preferredDate && <p className="text-xs text-destructive">{errors.preferredDate.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="itemsDescription">Describe the items to be hauled</Label>
                    <Textarea
                      id="itemsDescription"
                      placeholder="E.g., 3-seat sofa, old washing machine, 10 bags of yard waste..."
                      {...register('itemsDescription')}
                      className="min-h-[120px] bg-background"
                    />
                    {errors.itemsDescription ? (
                      <p className="text-xs text-destructive">{errors.itemsDescription.message}</p>
                    ) : (
                      <p className="text-xs text-muted-foreground">The more detail you provide, the more accurate our initial estimate will be.</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 border-t pt-6 flex justify-between items-center">
                  <p className="text-xs text-muted-foreground max-w-[240px]">
                    By submitting, you agree to our terms of service and privacy policy.
                  </p>
                  <Button type="submit" disabled={isSubmitting} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                    Request Free Quote
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}