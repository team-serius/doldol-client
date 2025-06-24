import { withAuth } from "@/components/HOC/withAuth";
import TermsOfServiceContent from "@/components/serviceinfo/TermsOfService";

const TermsOfServicePage = () => {
  return (
    <div className="pt-10">
      <TermsOfServiceContent />
    </div>
  );
};
export default withAuth(TermsOfServicePage, true);
