import PageContainer from "../components/layout/PageContainer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <PageContainer className="text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page introuvable</p>
      <Link to="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </PageContainer>
  );
};

export default NotFound;
