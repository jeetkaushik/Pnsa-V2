import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export type FAQItem = {
  question: string
  answer: React.ReactNode
}

export type FAQSectionProps = {
  title?: string
  subtitle?: string
  items?: FAQItem[]
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  className?: string
}

const defaultItems: FAQItem[] = [
  {
    question: "What is the minimum age to join the shooting academy?",
    answer:
      "We accept students from the age of 10 years and above. Younger children may be considered based on maturity and physical strength, with parent/guardian supervision.",
  },
  {
    question: "Do I need to have prior experience in shooting to join?",
    answer:
      "Not at all! Our academy welcomes beginners, intermediate, and advanced-level shooters. We offer customized training programs to suit all levels.",
  },
  {
    question: "What types of shooting disciplines do you offer?",
    answer: (
      <div className="space-y-1">
        <p>We currently offer training in:</p>
        <ul className="list-disc pl-5">
          <li>10m Air Rifle</li>
          <li>10m Air Pistol</li>
        </ul>
        <p className="text-muted-foreground">
          (Coaching in disciplines like 25m/50m pistol or rifle is available)
        </p>
      </div>
    ),
  },
  {
    question: "Are the coaches certified?",
    answer:
      "Yes, our coaches are national and international level shooters, NIS Certified, ISSF Coach Licence holders, etc.",
  },
  {
    question: "Do you provide equipment or do I need my own?",
    answer:
      "Basic equipment is provided for beginners. As you progress, we encourage owning personal gear for better performance. We also guide students on how to select and purchase suitable equipment.",
  },
  {
    question: "How can I enroll?",
    answer: (
      <div className="space-y-1">
        <p>You can enroll by:</p>
        <ul className="list-disc pl-5">
          <li>Visiting the academy in person</li>
          <li>Filling out the online registration form on our website</li>
          <li>
            Calling us directly at <a href="tel:9008736935" className="underline">9008736935</a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is shooting a safe sport for kids?",
    answer:
      "Absolutely. Safety is our top priority. All training takes place under strict supervision and in compliance with NRAI safety protocols. Every student is trained in gun safety and responsible handling before using any equipment.",
  },
  {
    question: "Do you assist in preparing for competitions?",
    answer:
      "Yes. We have structured programs for students aiming to participate in district, state, national, and international-level competitions. Our academy has a proven track record of producing medal-winning shooters.",
  },
  {
    question: "Can I try shooting before enrolling?",
    answer:
      "Yes, we offer a trial session where you can experience the sport and interact with our coaches before deciding to join.",
  },
  {
    question: "Do you have separate programs for schools and colleges?",
    answer:
      "Yes, we collaborate with educational institutions to set up in-house shooting programs and conduct training for school/college students.",
  },
  {
    question: "Can corporates or groups book the facility for events or team-building?",
    answer:
      "Yes, we organize corporate shooting experiences and custom events for groups. Contact us to plan your session.",
  },
]

export function FAQSection({
  title = "Frequently Asked Questions (FAQ)",
  subtitle = "Welcome to our Shooting Academy! Below are some of the most common questions we receive.",
  items = defaultItems,
  type = "single",
  defaultValue,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("w-full py-10 md:py-16", className)}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-sm md:text-base text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>

        <Accordion type={type} collapsible className="space-y-2" defaultValue={defaultValue as any}>
          {items.map((item, index) => {
            const value = `item-${index + 1}`
            return (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className="text-left text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection


