'use client';

import React, { FC, useEffect } from 'react';
import cx from 'clsx';

import styles from './pagination.module.scss';
import { Icon } from '../Icon';
import { ArrowSLineLeft } from '@icons/ArrowSLineLeft';
import { ArrowSLineRight } from '@icons/ArrowSLineRight';
import { Props } from './index';

const Pagination: FC<Props> = ({ items, total, page, limit, setPage }) => {
  const [pageLimit, setPageLimit] = React.useState<number>(10);
  const [tens, setTens] = React.useState<number>(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 윈도우 타입이 언디파인드가 아닐때 실행
      setPageLimit(window.innerWidth > 756 ? 10 : 5);
      //page limit 설정 (반응형)
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    setTens(Math.ceil(page / pageLimit));
    // 페이지가 바뀔때마다 tens 설정
  }, [page]);

  const handlePagnation = (page: number) => {
    setPage(page);
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    setPage(tens * pageLimit + 1);
    setTens(tens + 1);
  };

  const handlePrev = () => {
    setPage((tens - 2) * pageLimit + 1);
    setTens(tens - 1);
  };

  return (
    <div className={styles.container}>
      {items}

      <div className={styles.pagination}>
        {tens !== 1 && (
          <button className={cx(styles.styledButton, styles.icon)} onClick={handlePrev}>
            <Icon icon={ArrowSLineLeft} />
          </button>
        )}

        {React.Children.toArray(
          [
            ...Array(
              Math.ceil(total / limit) - tens * pageLimit >= 0
                ? pageLimit
                : Math.max(0, Math.ceil(total / limit) - (tens - 1) * pageLimit),
            ),
          ].map((_, idx) => (
            <button
              className={cx(styles.styledButton, {
                [styles.isActive]: (tens - 1) * pageLimit + idx + 1 === page,
              })}
              onClick={() => handlePagnation((tens - 1) * pageLimit + idx + 1)}
              key={(tens - 1) * pageLimit + idx + 1}
            >
              {(tens - 1) * pageLimit + idx + 1}
            </button>
          )),
        )}

        {Math.floor(total / limit) - tens * pageLimit > 0 && (
          <button
            className={cx(styles.styledButton, styles.icon, {
              [styles.isActive]: tens * pageLimit === page,
            })}
            disabled={Math.floor(total / limit) - tens * pageLimit < 0}
            onClick={handleNext}
          >
            <Icon icon={ArrowSLineRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
