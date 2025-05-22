import React, { memo, useEffect, useState } from 'react';

import cx from 'clsx';

import useClickOutside from '../../../../libs/src/hooks/useClickOutside';

import styles from './dropdown.module.scss';
import { Icon } from '../Icon';
import { ArrowSLineDown } from '@icons/ArrowSLineDown';
import { ArrowSLineUp } from '@icons/ArrowSLineUp';

interface Props<T> {
  className?: string;
  items: T[];
  valueKey: keyof T;
  displayKey?: keyof T;
  placeholder?: string;
  onChange?: (item: T) => void;
  activeItem?: T;
  disalbed?: boolean;
}

const Dropdown = <T extends Record<string, any>>({
  className,
  items,
  valueKey,
  displayKey,
  placeholder,
  onChange,
  activeItem,
  disalbed,
}: Props<T>): React.ReactElement => {
  const [selected, setSelected] = useState<T | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false), isOpen);

  useEffect(() => {
    setSelected(activeItem ?? null);
  }, [activeItem]);

  const onOpen = () => {
    if (disalbed) return;
    setIsOpen((prev) => !prev);
  };

  const onClickItem = (item: T) => {
    if (disalbed) return;
    if (item.id === '0') {
      setSelected(null);
      onChange && onChange(item);
    } else {
      setSelected(item);
      onChange && onChange(item);
    }
    setIsOpen(false);
  };

  return (
    <div className={cx(styles.wrapper, className)} ref={ref}>
      <div
        className={cx(
          styles.selected,
          { [styles.isOpen]: isOpen },
          { [styles.isSelect]: selected },
          { [styles.disabled]: disalbed }
        )}
        role="presentation"
        onClick={onOpen}
        aria-disabled={disalbed}
      >
        {selected ? selected[displayKey ?? valueKey] : placeholder ?? '선택해주세요.'}
        {isOpen ? (
          <Icon icon={ArrowSLineUp} size={12} color="black" />
        ) : (
          <Icon icon={ArrowSLineDown} size={12} color={disalbed ? 'gray-4' : 'black'} />
        )}
      </div>
      <ul className={cx(styles.itemWrapper, { [styles.isOpen]: isOpen })}>
        {items.map((item, index) => (
          <li
            className={cx(styles.item, {
              [styles.selectedItem]: selected && selected[valueKey] === item[valueKey],
            })}
            key={`${item[valueKey]}_${index}`}
            role="presentation"
            onClick={() => onClickItem(item)}
          >
            {item[displayKey ?? valueKey]}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default memo(Dropdown);
