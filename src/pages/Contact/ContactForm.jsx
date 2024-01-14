import React from "react";
import { ArrowRight } from "lucide-react";

function ContactForm() {
  return (
    <section>
      <div className="w-full h-screen flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-white">
            Contact Me
          </h2>
          <form
            action="https://formsubmit.co/swayamgupta5698@gmail.com"
            method="POST"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-[#b691ff] "
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className=" flex h-10 w-full rounded-md border text-black border-gray-950 bg-[#dbc8ff] px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    type="email"
                    placeholder="Email"
                    name="email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-[#b691ff]"
                  >
                    {" "}
                    Your Message{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    className="flex h-32 w-full bg-[#dbc8ff] rounded-md border text-black border-gray-950  px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="message"
                    id="message"
                    cols="10"
                    rows="4"
                    placeholder="Leave a comment"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Send <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
