export const Modal = ({
  children,
  onClose,
}: {
  children: JSX.Element;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-md"
      onClick={onClose}
    >
      {children}
    </div>
  );
};
