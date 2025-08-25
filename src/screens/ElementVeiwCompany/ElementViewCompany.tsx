

import { LegalDocumentsSection } from "./sections/LegalDocumentaionsSection/LegalDocumentsSection ";
 import { ContactInformationSection } from "./sections/ContactInformationSection/ContactInformationSection";

export const ElementViewCompany = (): JSX.Element => {
  return (
    <div className="flex w-full items-start bg-surface-default">
      <ContactInformationSection />
      <LegalDocumentsSection />
    </div>
  );
};
