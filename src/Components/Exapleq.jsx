import React, { useState } from 'react';

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-white dark:border-neutral-600 dark:bg-neutral-800 ">
      <h2 className="mb-0">
        <button
          className={` border-b border-orange-400 group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition ${
            isOpen
              ? 'bg-white text-primary box-shadow:inset_0_-1px_0_rgba(229,231,235)'
              : 'dark:bg-neutral-800 dark:text-white'
          } hover:z-[2] focus:z-[3] focus:outline-none`}
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          {title}
          <span
            className={`ml-auto h-5 w-5 shrink-0 rotate-${
              isOpen ? '0' : '-180deg'
            } fill-[#336dec] transition-transform duration-200 ease-in-out group-${isOpen ? '' : 'collapsed'}:rotate-0 group-${isOpen ? '' : 'collapsed'}:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-${isOpen ? '' : 'collapsed'}:fill-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`${isOpen && 'rotate-180'}  h-6 w-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        className={`${
          isOpen ? 'visible' : 'hidden'
        } px-5 py-4`}
      >
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="accordionExample">
      <AccordionItem title="Accordion Item #1">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
      </AccordionItem>

      <AccordionItem title="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
      </AccordionItem>

      <AccordionItem title="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
      </AccordionItem>
    </div>
  );
}

export default App;
