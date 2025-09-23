// AddNewSpecialitiesModal.tsx
import Input from "@mui/material/Input";
import { Textarea } from "../../components/ui/textarea";
import React from "react";
import { Button } from "../../components/ui/button";
export default function AddNewSpecialities({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
      className="bg-background-primary p-6 rounded-lg w-[min(100%,500px)] shadow-lg"
        style={{
          boxShadow: `
            0px 8px 8px -4px rgba(10, 13, 18, 0.04),
            0px 20px 24px -4px rgba(10, 13, 18, 0.1)
          `,
        }}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="font-semibold text-[22px] text-text-primary">Add New Specialities</h1>
          <button onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="#717680"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
   <hr className="m-3"></hr>

        <div className="p-4">
          <label className="text-text-primary font-semibold text-[16px]">
            Speciality Name
          </label>
          <Input
            className="w-full h-9 sm:h-10 md:h-12  rounded-md border border-gray-300
    hover:border-blue-500
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition-colors px-3 placeholder: text-text-secondary Placeholder: text-[clamp(14px,1.1vw,16px)] placeholder:font-normal"
     disableUnderline
      sx={{
    '::placeholder': {
      fontSize: '14px',
      color: 'text-text-secondary',
      fontWeight: 400,
    }}}

            placeholder="Enter Speciality Name"
          />
   <hr className="m-3"></hr>
          <div className="mt-4">
            <label className="text-text-primary font-semibold text-[16px]">
              Description
            </label>
            <Textarea
              className="w-full h-[120px] bg-background-secondary text-[clamp(14px,1.1vw,16px)]  text-text-secondary border-border-input rounded-[8px] px-3 placeholder:text-text-secondary Placeholder:text-[14px] placeholder:font-normal"
               
              placeholder="Enter Description " 
            />
          </div>
        </div>
              <div className=" items-center flex justify-center gap-4 relative flex-[0_0_auto] mt-5  ">
                   <button className="     w-[100px] h-[40px]       /* الموبايل الافتراضي */
    sm:w-[100px] sm:h-[26px] 
    md:w-[180px] md:h-[38px]
    lg:w-[200px] lg:h-[40px] 
 
      rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                Cancel
              </button>
              <button className="  w-[100px] h-[40px]       /* الموبايل الافتراضي */
    sm:w-[100px] sm:h-[24px] 
    md:w-[160px] md:h-[36px]
    lg:w-[200px] lg:h-[40px]  rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                Save
              </button>
            </div>
      </div>
    </div>
  );
}
