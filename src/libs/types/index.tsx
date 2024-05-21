export type TSignatureMenus = {
  menuName: string;
  menuPrice: number;
  menuDescription: string;
  menuImageUrl: string;
};

export type TCanteens = {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  signatureMenus: TSignatureMenus[];
};
