import React from "react";
import { DashboardLayout } from "../../layouts";
import { Link } from "react-router-dom";
import DasboardCard from "../../components/dashboard/DasboardCard";
import { contact, dollar } from "../../components/dashboard/dasboardIcons";
import { CopyCodeCard } from "../../components/dashboard/affiliate";
import logo from "../../assets/images/logo.png";

export default function Affiliate() {
  return (
    <DashboardLayout>
      <div className="mx-auto lg:ml-80 px-8">
        <div className="container mx-auto">
          <h2 className="text-light-title dark:text-white mt-4 mb-4 text-2xl font-bold">
            MAffiliate links and banners
          </h2>
          <div className=" font-normal">
            <p className="text-sm text-gray-700 dark:text-dark-paragraph">
              Share our benefits in your channels and get paid.
            </p>
            <p className="text-sm text-gray-700 dark:text-dark-paragraph">
              Earn <strong>25% </strong>of every sale.{" "}
              <strong>FOREVER! </strong>
              <Link className="text-primary" to="/affiliate">
                More info
              </Link>
            </p>
            <div className="flex flex-wrap items-center gap-4 lg:gap-8 mt-8">
              <DasboardCard
                title="Earned"
                count="$ 0"
                icon={dollar}
                to="/panel/card"
              />
              <DasboardCard
                title="Users"
                count="0"
                icon={contact}
                to="/panel/card"
              />
              <DasboardCard
                title="Paid"
                count="$ 0"
                icon={dollar}
                to="/panel/card"
              />
            </div>
            <div className="py-4 bg-light-tertiary dark:bg-dark-tertiary rounded mt-8">
              <div className="px-6 pb-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <p className="text-gray-700 dark:text-dark-paragraph ">
                  Copy HTML code and use in you emails, posts, blogs, social
                  media
                </p>
              </div>
              <CopyCodeCard
                title="Simple link"
                linkTitle="GroupsTracker.com"
                html="<a href='https://www.groupstracker.com/ref/1190' title='facebook groups monitoring'>GroupsTracker.com</a>"
              />

              <CopyCodeCard
                title="Link with tagline"
                linkTitle="GroupsTracker.com"
                html="<a href='https://www.groupstracker.com/ref/1190'>GroupsTracker.com<br><span style='font-size: smaller; color: #737b88'>Facebook Groups Monitoring</span></a>"
                linkSubtile="Facebook Groups Monitoring"
              />

              <CopyCodeCard
                title="Logo baner"
                img={logo}
                html="<a href='https://www.groupstracker.com/ref/1190'><img src='https://www.groupstracker.com/atis-assets/logo/groups-tracker-logo4.svg', alt='monitoring facebook groups for keywords'></a>"
              />

              <CopyCodeCard
                title="Logo baner with tagline"
                img={logo}
                html="<a href='https://www.groupstracker.com/ref/1190'><img src='https://www.groupstracker.com/atis-assets/logo/groups-tracker-logo4.svg', alt='monitoring keywords in facebook groups'><br><span style='font-size: 12px; color: #737b88; margin-left:55px;'>Facebook Groups Monitoring</span></a>"
                linkSubtile="Facebook Groups Monitoring"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
