import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormProps = {
  title?: string;
};

export default function ContactForm({ title = "Contact Us" }: ContactFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <Input placeholder="Your full name" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input type="email" placeholder="you@example.com" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <Input type="tel" placeholder="+91 98765 43210" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <Textarea placeholder="Tell us how we can help" className="min-h-[120px]" required />
        </div>
        <div className="md:col-span-2">
          <Button type="submit" variant="orange" className="w-full">Submit</Button>
        </div>
      </form>
    </div>
  );
}


