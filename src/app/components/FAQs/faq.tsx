"use client";

import { MinusIcon, PlusIcon } from "@/app/utils/icons";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import React, { useState } from "react";

const faqs = [
  {
    question: "What if the sneakers don’t fit? Can I return or exchange them?",
    answer:
      "We offer a 7-day hassle-free return or exchange on unworn products in original condition and packaging. If the fit isn't right or you changed your mind — no worries. We’ve got your back.",
  },
  {
    question: "Is shipping really free on all orders?",
    answer:
      "Yes! We offer free standard shipping across India on all orders — no minimum required. We believe great shoes should reach you without extra cost.",
  },
  {
    question: "How do I track my Drift order once it’s placed?",
    answer:
      "Once your order is shipped, you’ll receive a tracking link via email or SMS. You can follow every step of your sneakers' journey until they reach your doorstep.",
  },
  {
    question: "How long will it take to get my order?",
    answer: "It usually takes 7 days for your order to reach you.",
  },
  {
    question: "Are Drift shoes made for everyday wear or performance too?",
    answer:
      "Our latest drops are designed for everyday life — whether you’re heading to college, the office, a night out, or catching flights to your next adventure. Looking for performance-ready pairs? Join the #DriftersClub to stay in the loop on upcoming performance releases and exclusive drops.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <div
      id="faq"
      className="w-full md:min-h-[872px] max-h-auto  relative flex justify-center p-6 md:p-16"
    >
      <div className="w-full h-full flex flex-col gap-y-20">
        <div className="md:w-[85%]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10 font-cormorant text-[#C4A77D]">
            FAQ’s
          </h2>
          <div className="space-y-4 divide-y divide-[#C4A77D] ">
            {faqs.map((faq, idx) => (
              <Disclosure
                key={idx}
                as="div"
                data-open={openIndex === idx}
                className="py-6 md:p-6 text-black"
              >
                {({ open }) => (
                  <>
                    <DisclosureButton
                      className="group flex w-full items-center justify-between gap-4 text-start"
                      onClick={() => setOpenIndex(open ? null : idx)}
                    >
                      <span className="text-sm md:text-xl">{faq.question}</span>
                      <div>{open ? <MinusIcon /> : <PlusIcon />}</div>
                    </DisclosureButton>
                    {open && (
                      <DisclosurePanel
                        transition
                        className="mt-2 text-xs md:text-base md:max-w-[80%] text-[#5F6473] md:leading-6 transition duration-400 ease-out data-closed:-translate-y-6 data-closed:opacity-0 font-inter tracking-wider  leading-4.5"
                      >
                        {faq.answer}
                      </DisclosurePanel>
                    )}
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
