import { WithCoinType } from ".";

export interface CreateGalleryArgs {
  collection: string;
  tokenIdentifier: string;
  name: string;
  spaceType: string;
  metadataUri: string;
}
export interface CreateCurationOfferArgs extends WithCoinType {
  tokenOwner: string;
  tokenCreator: string;
  tokenCollection: string;
  tokenIdentifier: string; // Aptos: token name, EVM: token id
  tokenPropertyVersion: string;
  galleryId: string;
  price: string;
  commissionFeerateNumerator: number;
  commissionFeerateDenominator: number;
  offerDuration: number;
  exhibitDuration: number;
  url: string;
  additionalInfo: string;
}
export interface ReplyCurationOfferArgs extends WithCoinType {
  offerId: string;
  reply: boolean;
}

export interface CancelCurationOfferArgs extends WithCoinType {
  offerId: string;
}

export interface BuyExhibitArgs extends WithCoinType {
  galleryId: string;
  exhibitId: string;
  price: string;
}
export interface ListExhibitArgs extends WithCoinType {
  galleryId: string;
  exhibitId: string;
  additionalInfo: string;
}
export interface CancelExhibitArgs extends WithCoinType {
  galleryId: string;
  exhibitId: string;
}
export interface RedeemExhibitArgs extends WithCoinType {
  galleryId: string;
  exhibitId: string;
}