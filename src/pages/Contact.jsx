import React from "react";
import { Main } from "../layouts";
import { Banner, ContactForm } from "../components/contact";

export default function Contact() {
  return (
    <Main>
      <section className="py-20 bg-light-secondary dark:bg-dark-secondary">
        <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Banner />
            <ContactForm />
          </div>
        </div>
      </section>
    </Main>
  );
}
