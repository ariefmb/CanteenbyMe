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

// export type TOrders = {
//   id: string;
//   menus: TMenus[];
//   payment: string;
//   totalItem: number;
//   totalPrice: number;
//   createdAt: Date;
//   paid: boolean;
// };

// export type THistory = {
//   id: string;
//   transaction: TOrders[];
// };
