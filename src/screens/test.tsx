import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";



export default function ResponsiveForm({ }) {
  const steps = [
    { value: "account", label: "tabs.account", component: <h1>heeli</h1> },
    { value: "personal", label: "tabs.personal", component: <h1>heeli</h1> },
    { value: "employment", label: "tabs.employment", component: <h1>heeli</h1> },
    { value: "documents", label: "tabs.documents", component: <h1>heeli</h1> },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const goNext = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goPrev = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="w-full">
      {/* 🖥️ Tabs للديسكتوب */}
      <div className="hidden md:block">
        <Tabs  defaultValue="account">
          <TabsList className="flex w-full bg-primary-foreground rounded-lg border p-2">
            {steps.map((step) => (
              <TabsTrigger
                key={step.value}
                value={step.value}
                className="flex-1 text-sm font-semibold"
              >
                {(step.label)}
              </TabsTrigger>
            ))}
          </TabsList>

          {steps.map((step) => (
            <TabsContent key={step.value} value={step.value} className="mt-4">
              {step.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* 📱 Stepper للموبايل */}
      <div className="block md:hidden">
        <div className="mb-4">
          <h2 className="text-lg font-bold">{(steps[activeStep].label)}</h2>
        </div>

        <div className="p-3 border rounded-lg shadow-sm bg-white">
          {steps[activeStep].component}
        </div>

        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={activeStep === 0}
          >
            {("Previous")}
          </Button>
          <Button
            onClick={goNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? ("Finish") : ("Next")}
          </Button>
        </div>
      </div>
    </div>
  );
}
