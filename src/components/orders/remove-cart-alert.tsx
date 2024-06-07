import { Button, CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

interface ModalAlertProps {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const customTheme: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: 'fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
      show: {
        on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
        off: 'hidden',
      },
    },
    content: {
      base: 'relative h-full w-full p-4 md:h-auto',
      inner:
        'relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700',
    },
    body: {
      base: 'flex-1 overflow-auto p-6',
      popup: 'pt-0',
    },
    header: {
      base: 'flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600',
      popup: 'border-b-0 p-2',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'h-5 w-5',
      },
    },
  },
  button: {
    base: 'border-none',
    color: {
      primary: 'bg-[#A8B2DE]',
      buttonAdd:
        'bg-[#B5BEE3] transition-all duration-200 hover:rounded-full hover:bg-[#A2AACB]  active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
      buttonPrimary:
        'w-2/3 bg-[#B5BEE3] transition-all duration-200 hover:rounded-xl hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
    },
    isProcessing: 'cursor-drop',
    spinnerSlot: 'h-full flex items-center animate-fade-in',
    inner: {
      base: 'w-full font-bold text-slate-800 flex justify-center gap-2 items-center transition-all duration-200 hover:bg-primary',
      isProcessingPadding: {
        xs: 'px-4',
        sm: 'px-4',
        md: 'px-4',
        lg: 'px-4',
        xl: 'px-4',
      },
    },
    pill: {
      off: 'rounded-xl',
      on: 'rounded-full hover:rounded-full',
    },
    size: {
      xs: 'p-1 text-xs',
      sm: 'p-2 text-xs',
      md: 'px-4 py-2 text-lg',
    },
  },
};

export default function ModalAlert({
  show,
  onConfirm,
  onCancel,
}: ModalAlertProps) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Modal show={show} size='md' onClose={onCancel} popup>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this product?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={onConfirm}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={onCancel}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Flowbite>
  );
}
