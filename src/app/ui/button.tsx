"use client";

interface ColouredButtonProps {
  buttonText: string;
  scrolled?: {
    isScrolled: boolean;
    scrolledValue: number;
  };
}

export function SignUpButton({ buttonText, scrolled }: ColouredButtonProps) {
  return (
    <button
      className={`${scrolled?.isScrolled ? "bg-[#C4A77D]" : "bg-white"} rounded-full px-4 py-2.5  font-inter text-sm`}
    >
      {buttonText}
    </button>
  );
}

export function ColouredButton({ buttonText }: ColouredButtonProps) {
  return (
    <button className="w-[150px] rounded-full p-3 md:p-3.5 bg-[#D5CDC4] font-inter text-sm shadow-gray-400 shadow-md hover:text-[#F8F5F0] cursor-pointer">
      {buttonText}
    </button>
  );
}
