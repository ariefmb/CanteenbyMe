import { Button, CustomFlowbiteTheme, Modal } from 'flowbite-react';
import { TbAlertSquareRoundedFilled } from 'react-icons/tb';

interface ModalAlertProps {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const customModalTheme: CustomFlowbiteTheme['modal'] = {
  root: {
    base: 'origin-bottom fixed inset-x-0 top-0 z-50 transition-all duration-500 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
    show: {
      on: 'flex bg-gray-900 bg-opacity-50',
      off: 'hidden',
    },
    positions: {
      'top-left': 'items-start justify-start',
      'top-center': 'items-start justify-center',
      'top-right': 'items-start justify-end',
      'center-left': 'items-center justify-start',
      center: 'items-center justify-center',
      'center-right': 'items-center justify-end',
      'bottom-right': 'items-end justify-end',
      'bottom-center': 'items-end justify-center',
      'bottom-left': 'items-end justify-start',
    },
  },
  content: {
    base: 'relative flex items-center h-full w-full p-4 md:h-auto',
    inner: 'relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow',
  },
  body: {
    base: 'flex-1 overflow-auto p-6',
    popup: 'pt-0',
  },
  header: {
    base: 'flex items-start justify-between rounded-t border-b p-5',
    popup: 'border-b-0 p-2',
    title: 'text-xl font-medium text-gray-900',
    close: {
      base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900',
      icon: 'h-5 w-5',
    },
  },
};

const customButtonTheme: CustomFlowbiteTheme['button'] = {
  base: 'border-none',
  color: {
    failure:
      'border border-transparent transition-all duration-200 bg-red-400 hover:bg-red-500 text-white focus:ring-4 focus:ring-red-300',
    gray: 'ring-cyan-700 border-2 transition-all duration-200 hover:bg-gray-300 border-gray-200 text-gray-900 focus:text-cyan-700 focus:ring-4',
  },
  inner: {
    base: 'w-full font-bold text-slate-800 flex justify-center gap-2 items-center',
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
    on: 'rounded-full',
  },
  size: {
    xs: 'p-1 text-xs',
    sm: 'p-2 text-xs',
    md: 'px-4 py-2 text-lg',
  },
};

export default function ModalAlert({
  show,
  onConfirm,
  onCancel,
}: ModalAlertProps) {
  return (
    <Modal
      theme={customModalTheme}
      show={show}
      size='md'
      onClose={onCancel}
      className='backdrop-blur-sm'
      popup
    >
      <Modal.Header />
      <Modal.Body>
        <div className='text-center'>
          <TbAlertSquareRoundedFilled className='mx-auto mb-4 h-20 w-20 text-red-400' />
          <h3 className='mb-5 text-lg font-normal text-gray-500'>
            Are you sure you want to delete this product?
          </h3>
          <div className='flex justify-center gap-4'>
            <Button
              theme={customButtonTheme}
              color='failure'
              onClick={onConfirm}
            >
              Yes, I'm sure
            </Button>
            <Button theme={customButtonTheme} color='gray' onClick={onCancel}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
