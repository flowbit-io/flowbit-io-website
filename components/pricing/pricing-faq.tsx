import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFAQ() {
  return (
    <div className="container mx-auto px-4 mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Can't find the answer to your question?{" "}
            <a href="#" className="text-primary hover:underline">
              Open a support ticket
            </a>{" "}
            to receive help from our team.
          </p>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "Can I cap my usage so my bill doesn't run over?",
    answer: "Yes, you can set usage limits for your projects to control costs.",
  },
  {
    question: "I'm worried I could end up with a huge bill at the end of the month.",
    answer: "We provide usage alerts and caps to prevent unexpected charges.",
  },
  {
    question: "When will I be billed?",
    answer: "You'll be billed monthly for your usage in the previous month.",
  },
  {
    question: "Are you going to change your pricing in the future?",
    answer: "We strive to maintain stable pricing. Any changes will be communicated well in advance.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "Your project will be downgraded to the free tier with limited features.",
  },
  {
    question: "Do I get a notification if I am approaching my usage limits?",
    answer: "Yes, we send notifications when you reach 80% and 90% of your usage limits.",
  },
  {
    question: "What if I need one project for development and one for production?",
    answer: "You can create multiple projects under the same organization with different tiers.",
  },
  {
    question: "Can I self-host for free?",
    answer: "Yes, our platform is open-source and can be self-hosted.",
  },
  {
    question: "Can I pause a free project?",
    answer: "Free projects automatically pause after 1 week of inactivity.",
  },
]

