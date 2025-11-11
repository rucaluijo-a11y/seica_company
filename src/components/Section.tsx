import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  backgroundImage?: string;
}

export const Section = ({ id, className, children, backgroundImage }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden",
        className
      )}
    >
      {backgroundImage && (
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000",
            isVisible && "opacity-20"
          )}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className={cn(
        "relative z-10 w-full max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-1000",
        isVisible && "opacity-100 translate-y-0"
      )}>
        {children}
      </div>
    </section>
  );
};
