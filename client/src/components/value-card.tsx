import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <div className="flex items-start">
      <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
        <Icon className="text-primary h-5 w-5" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
