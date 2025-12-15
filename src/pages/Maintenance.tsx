import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="space-y-6 max-w-md animate-fade-in">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-primary/10">
            <Construction className="w-16 h-16 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Under Construction</h1>
        <p className="text-muted-foreground text-lg">
          We're currently working on making our site better. Please check back soon!
        </p>
        <div className="pt-4">
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()}
            className="gap-2"
          >
            Check Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
