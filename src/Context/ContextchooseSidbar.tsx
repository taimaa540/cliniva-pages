import React, { createContext, useState, ReactNode, useContext } from "react";

// نوع الخطط
export type PlanType = "Company" | "Complex" | "Clinic";

// شكل الـContext
interface AppContextType {
  selectedPlan?: PlanType;
  setSelectedPlan: (plan: PlanType) => void;
}

// إنشاء الـContext
const AppContext = createContext<AppContextType>({
  setSelectedPlan: () => {},
});

// Provider
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // نجيب القيمة من localStorage إذا موجودة
  const storedPlan = localStorage.getItem("selectedPlan") as PlanType | null;

  // نحدد الحالة ونخلي القيمة الأولية من localStorage
  const [selectedPlan, setSelectedPlanState] = useState<PlanType | undefined>(
    storedPlan ?? undefined
  );

  // دالة مخصصة لتحديث الحالة + تخزينها باللوكل ستورج
  const setSelectedPlan = (plan: PlanType) => {
    setSelectedPlanState(plan);
    localStorage.setItem("selectedPlan", plan);
  };

  return (
    <AppContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook جاهز للاستخدام
export const useAppContext = () => useContext(AppContext);
