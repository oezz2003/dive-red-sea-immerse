import { ReactNode } from "react";
import Maintenance from "@/pages/Maintenance";

interface MaintenanceMiddlewareProps {
    children: ReactNode;
}

const MaintenanceMiddleware = ({ children }: MaintenanceMiddlewareProps) => {
    // Check if maintenance mode is enabled via environment variable
    // You can set VITE_MAINTENANCE_MODE=true in your .env file
    const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

    if (isMaintenanceMode) {
        return <Maintenance />;
    }

    return <>{children}</>;
};

export default MaintenanceMiddleware;
