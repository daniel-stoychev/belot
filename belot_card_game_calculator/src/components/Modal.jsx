export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div>
        <button onClick={onClose}>X</button>
      </div>
      <div>{children}</div>
    </>
  );
}
