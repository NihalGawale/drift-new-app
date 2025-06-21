"use client";

interface ColouredButtonProps {
  buttonText: string;
  scrolled?: boolean;
}

export function SignUpButton({ buttonText, scrolled }: ColouredButtonProps) {
  return (
    <button
      className={`${scrolled ? "bg-[#C4A77D]" : "bg-white"} rounded-full px-4 py-2.5  font-inter text-sm font-semibold`}
    >
      {buttonText}
    </button>
  );
}

export function ColouredButton({ buttonText }: ColouredButtonProps) {
  return (
    <button className="w-[150px] rounded-full p-4 bg-[#C4A77D] font-inter text-sm font-semibold shadow-gray-400 shadow-md hover:text-[#F8F5F0] cursor-pointer">
      {buttonText}
    </button>
  );
}
