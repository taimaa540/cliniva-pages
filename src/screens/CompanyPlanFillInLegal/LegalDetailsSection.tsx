import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const legalInfoFields = [
  { label: "VAT Number", placeholder: "Enter VAT Number" },
  { label: "CR Number", placeholder: "Enter CR Number" },
];

const termsConditionsFields = [
  { titlePlaceholder: "Enter Title", descriptionPlaceholder: "Enter Content" },
];

const privacyPolicyFields = [
  { titlePlaceholder: "Enter Title", descriptionPlaceholder: "Enter Description" },
  { titlePlaceholder: "Enter Title", descriptionPlaceholder: "Enter Description" },
];

export const LegalDetailsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[1217px] items-start gap-4 pl-0 pr-4 py-4 relative left-[240px]">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 text-sm text-gray-500">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Choosing Plan Page
        </button>
        <h2 className="text-xl font-bold text-gray-900">
          Fill in Company Details
        </h2>
      </div>

      {/* Legal Info */}
      <Card>
        <CardContent className="p-6 flex flex-col gap-4 w-[1116px]">
          <h3 className="text-lg font-semibold text-primary-dark">Legal Info</h3>
          <div className="flex gap-6">
            {legalInfoFields.map((field, idx) => (
              <div key={idx} className="flex  gap-1">
                <label className="text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <Input placeholder={field.placeholder} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Terms & Conditions */}
      <Card>
        <CardContent className="p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-primary-dark">
            Terms &amp; Conditions
          </h3>
          {termsConditionsFields.map((field, idx) => (
            <div key={idx} className="flex  md:flex-row gap-4 items-start">
              <Input className="flex-1" placeholder={field.titlePlaceholder} />
              <div className="flex flex-col flex-1 gap-2">
                <Input placeholder={field.descriptionPlaceholder} />
                <PlusIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Privacy Policy */}
      <Card>
        <CardContent className="p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-primary-dark">Privacy Policy</h3>
          {privacyPolicyFields.map((field, idx) => (
            <div
              key={idx}
              className="flex  md:flex-row gap-4 items-start border-b border-gray-200 pb-4"
            >
              <Input className="flex-1" placeholder={field.titlePlaceholder} />
              <div className="flex flex-col flex-1 gap-2">
                <Input placeholder={field.descriptionPlaceholder} />
                {idx === privacyPolicyFields.length - 1 ? (
                  <PlusIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
                ) : (
                  <MinusIcon className="w-6 h-6 text-red-600 cursor-pointer" />
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">
          <ChevronRightIcon className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <Button className="bg-secondary-dark text-white rounded-full">
          Save &amp; Continue
        </Button>
      </div>
    </div>
  );
};
