export type TSignatureMenu = {
  menuName: string;
  menuPrice: number;
  menuDescription: string;
  menuImageUrl: string;
};

export type TCanteens = {
  id: string;
  name: string;
  imageUrl: string;
  open: boolean;
  createdAt: string;
  signatureMenu: string[];
};
