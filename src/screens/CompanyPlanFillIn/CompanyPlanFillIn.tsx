import React from "react";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { SocialMediaAccountsSection } from "./sections/SocialMediaAccountsSection";

export const CompanyPlanFillIn = (): JSX.Element => {
  return (
    <div className="flex w-full min-h-screen items-start bg-surface-default">
      {/* <SocialMediaAccountsSection /> */}
      <ContactInfoSection />
    </div>
  );
};
