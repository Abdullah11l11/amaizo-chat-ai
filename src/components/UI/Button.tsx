import { ButtonProps } from "@/types";
import { useRef, MouseEvent, useState } from "react";

const Button = ({
  children,
  className,
  type,
  color,
  ...props
}: ButtonProps & { color?: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative py-2.5 px-14 cursor-pointer text-white border border-coral rounded-3xl overflow-hidden bg-transparent ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {hovering && (
        <span
          className="absolute inset-0 pointer-events-none transition-all duration-200"
          style={{
            background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, ${color} 0%, transparent 60%)`,
          }}
        />
      )}
    </button>
  );
};

export default Button;
