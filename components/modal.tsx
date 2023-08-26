/**
 * @File components/modal.tsx
 */
import Button from "@/components/button";

interface ModalProps {
  message: string;
  buttonText: string;
  onClick?: () => void;
}

const Modal = (props: ModalProps): JSX.Element => {
  const { message, buttonText, onClick } = props;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded p-5 flex flex-col items-center">
        <div className="text-center font-semibold">{message}</div>
        <Button
          id="ok"
          type="button"
          onClick={onClick}
          className="mt-10 max-w-[150px]"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Modal;
