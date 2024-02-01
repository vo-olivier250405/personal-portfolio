export const Modal = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="fixed inset-0 bg-white opacity-30 backdrop-blur-sm">
      {children}
    </div>
  );
};
