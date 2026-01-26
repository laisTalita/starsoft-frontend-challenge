'use client';
type Car = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};
function Button({ onClick, children, className }: Car) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
export default Button;
