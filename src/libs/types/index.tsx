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
  id:          string;
  canteenId:   string;
  type:        string;
  name:        string;
  price:       number;
  signature:   boolean;
  imageUrl?:    string;
  description?: string;
  updateAt:    Date;
  createdAt:   Date;
}