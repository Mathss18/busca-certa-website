import EstimateReviewContextProvider from "@/modules/estimate-review/EstimateReview.context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <EstimateReviewContextProvider>{children}</EstimateReviewContextProvider>
    </div>
  );
}
