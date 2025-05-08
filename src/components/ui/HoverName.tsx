import { useState } from "react";

interface Props {
    classyName: string;
}

export default function HoverName({ classyName }: Props) {

    const [isHovered, setIsHovered] = useState(false);
    const [justHovered, setJustHovered] = useState(false);
    

    return (
      <h1
        className={`${classyName} relative inline-block`}
        onMouseEnter={() => {
            setIsHovered(true);
            setJustHovered(true);

            setTimeout(() => {
                setJustHovered(false);
            }, 500);
        }}
        onMouseLeave={() => {
            setIsHovered(false);
            setJustHovered(false);
        }}
        onClick={() => {
            setJustHovered(true);
            setTimeout(() => {
              setJustHovered(false);
            }, 500);
          }}
      >
        <span className={`z-10 relative text-[#EEECFE] ${isHovered ? 'drop-shadow-[0_0_4px_rgba(238,236,254,0.2)] drop-shadow-[0_0_8px_rgba(238,236,254,0.2)]' : ''}`}>
        <span>
            {isHovered ? "/diˌʌˈnɛθ/" : "Dianneth"}
        </span>
        </span>
  
        {justHovered && (
          <>
            <span
              aria-hidden="true"
              style={{ color: '#F2A5C0', clipPath: `polygon(0 ${Math.random() * 80}%, 100% ${Math.random() * 80}%, 100% ${Math.random() * 80 + 10}%, 0 ${Math.random() * 80 + 10}%)` }}
              className="z-0 absolute left-0 top-0 w-full opacity-70 blur-sm motion-safe:animate-glitch-jerk pointer-events-none"
            >
              /diˌʌˈnɛθ/
            </span>
            <span
              aria-hidden="true"
              style={{ color: '#A5E9F2', clipPath: `polygon(0 ${Math.random() * 80}%, 100% ${Math.random() * 80}%, 100% ${Math.random() * 80 + 10}%, 0 ${Math.random() * 80 + 10}%)` }}
              className="z-0 absolute left-0 top-0 w-full opacity-70 blur-sm motion-safe:animate-glitch-jerk pointer-events-none"
            >
              /diˌʌˈnɛθ/
            </span>
          </>
        )}

        {isHovered && !justHovered && (
          <>
            <span
              aria-hidden="true"
              style={{ color: '#F2A5C0', clipPath: `polygon(0 ${Math.random() * 80}%, 100% ${Math.random() * 80}%, 100% ${Math.random() * 80 + 10}%, 0 ${Math.random() * 80 + 10}%)` }}
              className="z-0 absolute left-0 top-0 w-full opacity-50 blur-sm motion-safe:animate-glitch-small pointer-events-none"
            >
              /diˌʌˈnɛθ/
            </span>
            <span
              aria-hidden="true"
              style={{ color: '#A5E9F2', clipPath: `polygon(0 ${Math.random() * 80}%, 100% ${Math.random() * 80}%, 100% ${Math.random() * 80 + 10}%, 0 ${Math.random() * 80 + 10}%)` }}
              className="z-0 absolute left-0 top-0 w-full opacity-50 blur-sm motion-safe:animate-glitch-big pointer-events-none"
            >
              /diˌʌˈnɛθ/
            </span>
          </>
        )}
      </h1>
    );
}