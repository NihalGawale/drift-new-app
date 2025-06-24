"use client";

interface ColouredButtonProps {
  buttonText: string;
  scrolled?: {
    isScrolled: boolean;
    scrolledValue: number;
  };
  pathname?: string;
}

export function SignUpButton({ buttonText, scrolled, pathname }: ColouredButtonProps) {
  const showColouredButton = () => {
    if (pathname === "/") {
      return scrolled?.isScrolled ? "bg-[#C4A77D]" : "bg-white";
    } else {
      return "bg-[#C4A77D]";
    }
  };

  return (
    <button className={`${showColouredButton()} rounded-full px-4 py-2.5  font-inter text-sm`}>
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
