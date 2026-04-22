import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { AppLayout } from '@/components/layout/AppLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Inbox, Phone, Mail, Calendar, Eye, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api-client';
import { toast } from 'sonner';
import type { Lead, LeadStatus } from '@shared/types';
const statusMap: Record<LeadStatus, { label: string, color: string }> = {
  pending: { label: 'Pending', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  contacted: { label: 'Contacted', color: 'bg-slate-100 text-slate-700 border-slate-200' },
  completed: { label: 'Completed', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
};
export function AdminDashboard() {
  const queryClient = useQueryClient();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const { data, isLoading } = useQuery({
    queryKey: ['leads'],
    queryFn: () => api<{ items: Lead[], next: string | null }>('/api/leads'),
  });
  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string, status: LeadStatus }) => {
      return api<Lead>(`/api/leads/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      toast.success('Status updated successfully');
      setSelectedLead(null);
    },
    onError: (err: Error) => {
      toast.error('Failed to update status', { description: err.message });
    }
  });
  const leads = data?.items ?? [];
  return (
    <AppLayout container contentClassName="max-w-7xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage and track all incoming hauling leads.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Total Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{leads.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-600">
                {leads.filter(l => l.status === 'pending').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">
                {leads.length > 0 ? Math.round((leads.filter(l => l.status === 'completed').length / leads.length) * 100) : 0}%
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="border-none shadow-soft overflow-hidden">
          <CardHeader className="bg-muted/30 border-b">
            <CardTitle className="text-lg flex items-center gap-2">
              <Inbox className="h-5 w-5 text-emerald-600" />
              Incoming Requests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-8 space-y-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            ) : leads.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center px-4">
                <div className="bg-slate-50 p-4 rounded-full mb-4">
                  <Inbox className="h-8 w-8 text-slate-300" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">No leads found</h3>
                <p className="text-slate-500 max-w-xs">When customers book through your site, they will appear here.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Preferred Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id} className="group hover:bg-muted/30 transition-colors">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground">{lead.name}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="flex items-center text-xs text-muted-foreground gap-1">
                              <Mail className="h-3 w-3" /> {lead.email}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {lead.serviceType.replace('-', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-sm">
                          <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                          {format(new Date(lead.preferredDate), 'MMM d, yyyy')}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${statusMap[lead.status].color} font-medium border shadow-none`}>
                          {statusMap[lead.status].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setSelectedLead(lead)}
                          className="hover:bg-emerald-50 hover:text-emerald-600"
                        >
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
      <Dialog open={!!selectedLead} onOpenChange={(open) => !open && setSelectedLead(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
            <DialogDescription>
              Review lead information and update current status.
            </DialogDescription>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <span className="text-muted-foreground block">Customer</span>
                  <span className="font-medium">{selectedLead.name}</span>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-muted-foreground block">Phone</span>
                  <a href={`tel:${selectedLead.phone}`} className="font-medium text-emerald-600 hover:underline">{selectedLead.phone}</a>
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground block">Email</span>
                  <span className="font-medium break-all">{selectedLead.email}</span>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-muted-foreground block">Zip Code</span>
                  <span className="font-medium">{selectedLead.zipCode}</span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Items Description</h4>
                <p className="text-sm leading-relaxed">{selectedLead.itemsDescription}</p>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium">Update Lead Status</label>
                <Select 
                  defaultValue={selectedLead.status} 
                  onValueChange={(val: LeadStatus) => updateStatusMutation.mutate({ id: selectedLead.id, status: val })}
                  disabled={updateStatusMutation.isPending}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                {updateStatusMutation.isPending && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground animate-pulse">
                    <Loader2 className="h-3 w-3 animate-spin" /> Saving...
                  </div>
                )}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedLead(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}