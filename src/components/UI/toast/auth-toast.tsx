import { useAuthContext } from '@/context/auth-context';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthToast = () => {
  const { setShowToast, showToast } = useAuthContext();
  const { data: session } = useSession();
  const userSession = session?.user;

  useEffect(() => {
    if (!userSession || showToast) return;

    toast.info(` Hello,  ${session?.user?.name}`, {
      bodyStyle: { color: 'slategray' },
      icon: <FaCheckCircle color='#6B76AD' size={24} />,
      progressStyle: { backgroundColor: '#6B76AD' },
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: 'light',
    });

    setShowToast(true);
  }, [userSession, showToast]);
  return <ToastContainer limit={1} />;
};
