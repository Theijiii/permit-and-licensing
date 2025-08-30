import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // or whichever icon library you use

const UserNav = ({ items, collapsed }) => {
  const [expandedItem, setExpandedItem] = useState(new Set());

  const toggleExpanded = (item) => {
    const newExpanded = new Set(expandedItem);
    if (newExpanded.has(item.id)) {
      newExpanded.delete(item.id);
    } else {
      newExpanded.add(item.id);
    }
    setExpandedItem(newExpanded);
  };

  return (
    <nav className="flex flex-col p-4">
      {items.map((item) => {
        const isActive = expandedItem.has(item.id);
        return (
          <button
            key={item.id}
            className={`
              w-full flex justify-between items-center p-3 mb-2 rounded-xl border shadow-sm transition-all duration-200
              ${isActive
                ? 'bg-orange-200 text-orange-600 font-semibold border-orange-400'
                : 'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
              }
            `}
            onClick={() => toggleExpanded(item)}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </div>
            {!collapsed && item.subItems && (
              <ChevronDown
                className={`
                  w-4 h-4 text-slate-500 transition-transform duration-200
                  ${expandedItem.has(item.id) ? 'rotate-180' : ''}
                `}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default UserNav;
