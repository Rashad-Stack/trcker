import React from "react";
import Main from "../../layouts/Main";
import { FacebookWebhookHeader, GroupTrackerApi, HowWebHookWorks, QuickSetup } from "../../components/footer";


export default function FacebookWebhook() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <FacebookWebhookHeader />
          <QuickSetup />
          <HowWebHookWorks />
          <GroupTrackerApi />
        </div>
      </section>
    </Main>
  );
}
