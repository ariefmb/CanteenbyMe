export type TSignatureMenu = {
  menuName: string;
  menuPrice: number;
  menuDescription?: string;
  menuImageUrl?: string;
};

export type TCanteens = {
  id: string;
  name: string;
  imageUrl?: string;
  open: boolean;
  createdAt: Date;
  signatureMenu: string[];
};

export type TMenus = {
  id: string;
  canteenId: string;
  type: string;
  name: string;
  price: number;
  signature: boolean;
  imageUrl?: string;
  description?: string;
  updateAt: Date;
  createdAt: Date;
};

export type TCreateOrder = {
  redirectUrl: string;
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  tableNumber: number | null;
  fees: number;
  orderMenus: TOrderMenu[];
};

export type TOrderMenu = {
  id: string;
  quantity: number | undefined;
};

export type TInvoice = {
  invoiceId: string;
  invoiceUrl: string;
};

export type THistoryOrders = {
  id: string;
  orderNumber: number;
  tableNumber: string;
  userId: string;
  paymentMethod: string;
  status: string;
  paidAt: string;
  totalPrice: number;
  totalItem: number;
  updatedAt: string;
  createdAt: string;
  orderMenus: OrderList[];
};

export type OrderList = {
  name: string;
  imageUrl: string;
  price: number;
};
