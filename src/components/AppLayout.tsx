import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import AppSidebar from "./AppSidebar";

const AppLayout = () => {
  const { isAuthenticated } = useAuth();
  const isMobile = useIsMobile();

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className={`flex-1 overflow-hidden flex flex-col ${isMobile ? "pt-14" : ""}`}>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
