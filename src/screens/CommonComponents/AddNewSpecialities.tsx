// AddNewSpecialitiesModal.tsx
import Input from "@mui/material/Input";
import { Textarea } from "../../components/ui/textarea";
import React from "react";
import { Button } from "../../components/ui/button";
export default function AddNewSpecialities({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
      className="bg-background-primary p-6 rounded-lg w-[500px] shadow-lg"
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
            className="w-full h-[48px]  rounded-md border border-gray-300
    hover:border-blue-500
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition-colors px-3 placeholder: text-text-secondary Placeholder: text-[14px] placeholder:font-normal"
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
              className="w-full h-[120px] bg-background-secondary text-[14px]  text-text-secondary border-border-input rounded-[8px] px-3 placeholder:text-text-secondary Placeholder:text-[14px] placeholder:font-normal"
               
              placeholder="Enter Description " 
            />
          </div>
        </div>
              <div className=" items-center flex justify-end gap-4 relative flex-[0_0_auto] mt-5  ">
              <Button
                variant="outline"
                className="flex rounded-[20px] w-[200px] items-center h-10 justify-center px-4 py-2.5 relative bg-background-tertiary -[20px] border-2 border-solid- border-light"
              >
                <div className="flex w-[82px] items-center justify-center gap-1 relative">
                  <div className="inline-flex h-5 items-center gap-2.5 px-0 py-0.5 relative flex-[0_0_auto]">
                    <div className="font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] relative w-fit font-btn-14px-medium text-center tracking-[var(--btn-14px-medium-letter-spacing)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]">
                      Cancel
                    </div>
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="flex w-[200px] h-10 items-center  justify-center gap-1 pl-4 pr-3.5 py-2.5 relative bg-secondary-dark rounded-[20px] ">
                <div className="inline-flex items-center  gap-2.5 p-0.5 relative flex-[0_0_auto] ">
                  <div className="mt-[-1.00px] font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] relative w-fit font-btn-14px-medium text-center tracking-[var(--btn-14px-medium-letter-spacing)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]">
                    Save
                  </div>
                </div>
              </Button>
            </div>
      </div>
    </div>
  );
}
