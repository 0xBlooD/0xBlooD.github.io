import { useState, useEffect } from "react";

interface BootSequenceProps {
  moduleName: string;
  onComplete: () => void;
}

const bootLines = (moduleName: string) => [
  `Loading module '${moduleName}'...`,
  `  [  OK  ] Reached target ${moduleName}.`,
  `  [  OK  ] Started ${moduleName} service.`,
  `  [  OK  ] Mounting filesystem /dev/${moduleName.toLowerCase().replace(/\s/g, "_")}...`,
  `  [  OK  ] Module loaded successfully.`,
  "",
];

const BootSequence = ({ moduleName, onComplete }: BootSequenceProps) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const lines = bootLines(moduleName);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setVisibleLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 300);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 md:p-8">
      {visibleLines.map((line, idx) => (
        <div key={idx} className="text-foreground text-sm md:text-base whitespace-pre">
          {line}
        </div>
      ))}
      <span className="cursor-blink text-foreground">█</span>
    </div>
  );
};

export default BootSequence;
