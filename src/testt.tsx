import { useState } from "react";
import { AccountCreationSection } from "./screens/CompanyPlan/sections/AccountCreationSection";
import { CompanyDetailsSection } from "./screens/CompanyDetailsSection/CompanyDetailsSection";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const steps = [
  { id: 1, title: "Account Setup" },
  { id: 2, info: 1, title: "Fill in Company Details" },
  { id: 3, title: "Fill in Clinic Details" },
  { id: 4, title: "Fill in Clinic Details" },
  { id: 5, title: "Fill in Clinic Details" },
  { id: 6, info: 2, title: "Fill in Clinic Details" },
  { id: 7, title: "Fill in Clinic Details" },
  { id: 8, title: "Fill in Clinic Details" },
  { id: 9, title: "Fill in Clinic Details" },
  { id: 10, info: 3, title: "Fill in Clinic Details" },
  { id: 11, title: "Fill in Clinic Details" },
  { id: 12, title: "Fill in Clinic Details" },
];

export const NavigationSidebarSection1 = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showDialog, setShowDialog] = useState(false);

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep((prev) => (prev + 1) as Step);
    else if (currentStep === 6) {
      setShowDialog(true); // آخر خطوة → إظهار الـ Dialog
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as Step);
  };

  const handleSave = () => {
    setShowDialog(false);
    alert("✅ Data saved successfully!");
  };

  return (
    <nav className="flex h-screen w-full items-start bg-surface-default overflow-hidden">
      <div className="w-[223px] bg-surface-default">
        <header className="flex flex-col items-start gap-2.5 px-2 py-[9px] mt-4 ml-5 w-full">
          <div className="flex items-center gap-[7px]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 13V15H15V0H13V1C13 7.62742 7.62742 13 1 13H0Z"
                fill="#A5C8F2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30 15H15V30H17.1322C18.0228 23.3156 23.3156 18.0228 30 17.1322V15Z"
                fill="#83DFDF"
              />
            </svg>
            <h1
              className={`text-xl leading-[22px] tracking-[0] whitespace-nowrap font-normal`}
            >
              Cliniva SYS
            </h1>
          </div>
        </header>
        {/* <div style={{ display: "flex", gap: "50px", marginTop: "30px" }}>
        <div>
          <img alt="" src="./home.svg" style={{marginLeft: "30px"}} />
          <div
            className="stepNum"
            style={{
              backgroundColor: "green",
              height: "380px",
              padding: "5px",
              borderRadius: "16px",
              marginLeft: "30px",
              marginTop: "20px" 
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "5px 10px",
              }}
            >
              1
            </div>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "gray",
                borderRadius: "50%",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "gray",
                borderRadius: "50%",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "gray",
                borderRadius: "50%",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                marginTop: "30px",
                padding: "5px 10px",
              }}
            >
              2
            </div>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "gray",
                borderRadius: "50%",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "gray",
                borderRadius: "50%",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "gray",
                borderRadius: "50%",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                marginTop: "30px",
                padding: "5px 10px",
              }}
            >
              3
            </div>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "gray",
                borderRadius: "50%",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "gray",
                borderRadius: "50%",
                margin: "10px auto",
              }}
            ></div>
          </div>
        </div>
        <div className="stepTitle">
          <h6 >test</h6>
          <h6 style={{marginTop: "20px" }}>test</h6>
          <h6 style={{margin: "10px 0"}}>test</h6>
          <h6 style={{margin: "10px 0"}}>test</h6>
          <h6 style={{margin: "10px 0"}}>test</h6>
          <h6 style={{marginTop: "30px" }}>test</h6>
          <h6 style={{margin: "10px 0"}}>test</h6>
          <h6 style={{margin: "10px 0"}}>test</h6>
          <h6 style={{margin: "10px 0"}}>test</h6>
          <h6 style={{marginTop: "30px" }}>test</h6>
          <h6 style={{margin: "10px 0"}}>test</h6>
          <h6 style={{margin: "10px 0"}}>test</h6>
        </div>
      </div> */}
        {/* Sidebar */}
        <aside className=" p-4 flex flex-col gap-6 w-[223px]">
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            // نحدد شكل كل خطوة حسب رقم الـ id
            let content: React.ReactNode = null;
            let circleClass = "";

            if (step.id === 1) {
              // أيقونة للخطوة الأولى
              content = (
                <>
                  <img alt="" src="./UserCircle.svg" />
                  <p>Account Setup</p>
                </>
              );
            } else if ([2, 6, 10].includes(step.id)) {
              // دائرة برقم للخطوات 2 و6 و10
              content = (
                <span className="text-sm font-bold text-gray-700">
                  {step.info}
                </span>
              );
              circleClass =
                "w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-gray-400";
            } else {
              // نقطة لباقي الخطوات
              circleClass = "w-3 h-3 rounded-full bg-gray-400";
            }

            return (
              <div
                style={{
                  backgroundColor: "green",
                  height: "380px",
                  padding: "5px",
                  borderRadius: "16px",
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
              >
                <div
                  key={step.id}
                  // className={`flex flex-col items-center ${
                  //   isCompleted ? "bg-green-500 text-white" : ""
                  // }
                  //   ${isActive ? "border-2 border-blue-500 text-blue-500" : ""}
                  //   ${
                  //     !isActive && !isCompleted
                  //       ? "border border-gray-300 text-gray-400"
                  //       : ""
                  //   } `}
                >
                  {/* الدائرة / الأيقونة */}
                  <div className={circleClass}>{content}</div>
                </div>
              </div>
            );
          })}
        </aside>
      </div>

      {/* Main Content */}
      <main className="flex flex-col w-full h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
        {currentStep === 1 && (
          <AccountCreationSection
            nextStep={nextStep}
            currentStep={currentStep}
          />
        )}

        {currentStep === 2 && <CompanyDetailsSection />}

        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Clinic Details</h2>
            <input
              placeholder="Clinic Name"
              className="block border p-2 rounded mb-2 w-80"
            />
            <input
              placeholder="Location"
              className="block border p-2 rounded mb-2 w-80"
            />
            <input
              placeholder="Working Hours"
              className="block border p-2 rounded mb-2 w-80"
            />
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Clinic Details</h2>
            <input
              placeholder="Clinic Name"
              className="block border p-2 rounded mb-2 w-80"
            />
            <input
              placeholder="Location"
              className="block border p-2 rounded mb-2 w-80"
            />
            <input
              placeholder="Working Hours"
              className="block border p-2 rounded mb-2 w-80"
            />
          </div>
        )}
        {currentStep === 5 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Clinic Details</h2>
            <input
              placeholder="Clinic Name"
              className="block border p-2 rounded mb-2 w-80"
            />
            <input
              placeholder="Location"
              className="block border p-2 rounded mb-2 w-80"
            />
            <input
              placeholder="Working Hours"
              className="block border p-2 rounded mb-2 w-80"
            />
          </div>
        )}

        {/* Actions */}
        <div className="absolute bottom-[60px] right-[100px]  h-10 hover:bg-secondary-dark/90 rounded-[20px] px-4 py-2.5 h-auto">
          <button
            onClick={prevStep}
            hidden={currentStep === 1}
            className={`px-4 py-2 rounded border mr-[50px] ${
              currentStep === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-gray-700 border-gray-400 hover:bg-gray-100"
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={nextStep}
            className={`px-4 py-2 rounded text-white ${
              currentStep === 6
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
          >
            {currentStep === 6 ? "Save" : "Next →"}
          </button>
        </div>

        {/* Dialog Modal */}
        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" bg-white rounded-lg shadow-lg w-[500px] h-[144px] ">
              <button className="ml-[150px] mt-[16px] p-[5px] rounded-[16px] hover:bg-surface-hover transiton duration-300">
                <img alt="" src="x-close.svg" />
              </button>
              <img alt="" src="./FeaturedIcon.svg" className="m-auto" />
              <p className=" text-center font-lato font-semibold text-xl leading-[118%] tracking-[0] text-[#181D27] ">
                Company plan has been successfully set up.
              </p>
            </div>
          </div>
        )}
      </main>
    </nav>
  );
};
