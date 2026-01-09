import { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  badge?: string;
}

const ModuleCard = ({ title, description, icon: Icon, color, badge }: ModuleCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            {badge && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
            <span>Manage</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
