"use client";

import { Calendar } from "@/components/Layouts/sidebar/icons";
import flatpickr from "flatpickr";
import { useEffect, useId } from "react";

interface DatePickerOneProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (date: Date[]) => void;
  className?: string;
}

const DatePickerOne = ({
  label = "Date picker",
  placeholder = "dd/mm/yyyy",
  value,
  onChange,
  className = "",
}: DatePickerOneProps) => {
  const id = useId();
  const inputId = `datepicker-${id}`;

  useEffect(() => {
    // Init flatpickr
    let picker: flatpickr.Instance | null = null;
    try {
      const element = document.querySelector(`#${inputId}`);
      if (element) {
        picker = flatpickr(element as HTMLElement, {
          mode: "single",
          static: true,
          monthSelectorType: "static",
          dateFormat: "d/m/Y",
          defaultDate: value ? new Date(value) : undefined,
          onChange: (selectedDates) => {
            onChange?.(selectedDates);
          },
        });

        // Update the picker's selected date when value changes
        if (value && picker) {
          picker.setDate(new Date(value), false);
        }
      }

      return () => {
        if (picker) {
          picker.destroy();
        }
      };
    } catch (error) {
      console.error('Error initializing flatpickr:', error);
    }
  }, [inputId, value, onChange]);

  return (
    <div className={className}>
      {label && (
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          className="w-full appearance-none rounded border border-stroke bg-transparent px-4 py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          placeholder={placeholder}
          data-class="flatpickr-right"
          value={value || ""}
          readOnly
        />

        <div className="pointer-events-none absolute inset-0 left-auto right-4 flex items-center">
          <Calendar className="size-5 text-[#9CA3AF]" />
        </div>
      </div>
    </div>
  );
};

export default DatePickerOne;
