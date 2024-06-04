import { faq } from "../../utils/home/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/components/ui/accordion";

const Faq = () => {
  return (
    <div className="bg-[#ffff] ">
      <div className="lg:container lg:max-w-9xl mx-auto ">
        <div className="text-center lg:m-10 m-3">
          <h6>FAQ's</h6>
          <h1 className="lg:text-4xl text-lg ">
            FAQ Unveiled: Your Queries Answered
          </h1>
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
    </div>
  );
};

export default Faq;
