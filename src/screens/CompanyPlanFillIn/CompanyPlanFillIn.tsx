import React from "react";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { SocialMediaAccountsSection } from "./sections/SocialMediaAccountsSection";

export const CompanyPlanFillIn = (): JSX.Element => {
  return (
    <div className="p-0 w-full overflow-y-auto scroll-x-hidden h-full">
      {/* <SocialMediaAccountsSection /> */}
      <ContactInfoSection />
    </div>
  );
};
