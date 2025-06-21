interface ColouredButtonProps {
  buttonText: string;
}

export async function SignUpButton({ buttonText }: ColouredButtonProps) {
  return (
    <button className="rounded-full px-4 py-2.5 bg-[#C4A77D] font-inter text-sm font-semibold">
      {buttonText}
    </button>
  );
}

export async function ColouredButton({ buttonText }: ColouredButtonProps) {
  return (
    <button className="w-[150px] rounded-full py-3 bg-[#C4A77D] font-inter text-sm font-semibold shadow-gray-400 shadow-md">
      {buttonText}
    </button>
  );
}
