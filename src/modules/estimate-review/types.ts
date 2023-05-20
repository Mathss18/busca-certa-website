export type EstimateReviewContextType = {
  price: any;
  setPrice: any;
  nonce: string | undefined;
  setNonce: (nonce: any) => void;
  estimate: any;
  error: boolean;
  isLoading: boolean;
  handleAccept: () => void;
  handleDecline: () => void;
  handleSupport: () => void;
};
