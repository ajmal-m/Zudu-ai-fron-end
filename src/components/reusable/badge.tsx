import React, { memo } from "react";

type BadgeProps = {
  label: string;
  priority: "low" | "high" | "medium";
};

const colorClasses: Record<BadgeProps["priority"], string> = {
  low: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  medium: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
};

const Badge: React.FC<BadgeProps> = memo(({ label, priority }) => {
  return (
    <span
      className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-full capitalize ${colorClasses[priority]}`}
    >
      {label}
    </span>
  );
});

export default Badge;
