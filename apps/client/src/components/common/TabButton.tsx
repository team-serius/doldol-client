'use client';

import { TabMenu } from '@/interface/menu.interface';

interface Props {
  tabMenus: TabMenu[];
  onClick: (id: string) => void;
  isActive: string;
}

export const TabButtonMenu: React.FC<Props> = ({
  tabMenus,
  onClick,
  isActive,
}) => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {tabMenus.map((menu) => (
          <li key={menu.id}>
            <button
              onClick={() => onClick(menu.id)}
              className={`px-4 py-2 rounded ${isActive ? 'bg-black' : 'bg-gray-200 text-gray-700'}`}
            >
              {menu.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
