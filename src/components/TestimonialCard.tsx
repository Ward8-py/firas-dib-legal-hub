import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}

const TestimonialCard = ({ quote, author, position }: TestimonialCardProps) => {
  return (
    <Card className="border-border hover:shadow-card transition-all duration-300">
      <CardContent className="p-6 space-y-4">
        <Quote className="h-10 w-10 text-accent opacity-50" />
        <p className="font-inter text-foreground italic leading-relaxed">
          "{quote}"
        </p>
        <div className="pt-4 border-t border-border">
          <p className="font-playfair font-semibold text-foreground">{author}</p>
          <p className="font-inter text-sm text-muted-foreground">{position}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
