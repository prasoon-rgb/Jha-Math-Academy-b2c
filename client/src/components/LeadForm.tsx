import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, GraduationCap } from "lucide-react";
import { z } from "zod";

// Frontend validation schema can be slightly stricter or match backend
const formSchema = insertLeadSchema.extend({
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  grade8Score: z.string().min(1, "Please enter the Grade 8 score"),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadForm() {
  const { mutate, isPending } = useCreateLead();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      guardianName: "",
      grade8Score: "",
      phone: "",
      email: "",
    },
  });

  function onSubmit(data: FormValues) {
    // Clean up empty email string to null/undefined if backend requires, 
    // but schema allows string | null, so empty string might be fine depending on Zod
    // Our schema says email: text("email"), which is nullable in DB but likely string in Zod
    // Let's pass it as is.
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-2xl border-primary/10 bg-white/90 backdrop-blur-sm">
      <CardHeader className="space-y-1 bg-gradient-to-r from-primary/5 to-transparent rounded-t-xl">
        <div className="flex items-center gap-2 text-primary mb-2">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold text-sm uppercase tracking-wider">Enroll Now</span>
        </div>
        <CardTitle className="text-2xl font-display font-bold text-slate-900">
          Start Your Journey
        </CardTitle>
        <CardDescription className="text-base text-slate-600">
          Fill out the form below to register for Grade 9 Mathematics classes.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Student Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Arjun Kumar" {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="grade8Score"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Grade 8 Score</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 85%" {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="guardianName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Guardian's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Parent/Guardian Name" {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+91 98765 43210" {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Email (Optional)</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@gmail.com" {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
