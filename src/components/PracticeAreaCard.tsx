import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PracticeAreaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PracticeAreaCard = ({ icon: Icon, title, description }: PracticeAreaCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 border-border hover:border-accent/50">
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="font-playfair font-semibold text-xl text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="font-inter text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default PracticeAreaCard;
