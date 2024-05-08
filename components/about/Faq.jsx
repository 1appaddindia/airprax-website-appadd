import { faq } from "../../utils/home/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/components/ui/accordion";

const Faq = () => {
  return (
    <div className="container max-w-9xl mx-auto mt-5 p-10">
      <div className="text-center m-10">
        <h6>FAQ's</h6>
        <h1>FAQ Unveiled: Your Queries Answered</h1>
      </div>
      <div className="flex items-start justify-center text-sm lg:text-base">
        <Accordion type="single" collapsible className="w-[80%]">
          {faq.map((que, id) => (
            <AccordionItem value={que.id}>
              <AccordionTrigger>{que.question}</AccordionTrigger>
              <AccordionContent>{que.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
