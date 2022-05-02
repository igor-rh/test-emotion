import { css } from '@emotion/css';
import memoize from 'lodash/memoize';

const MONTH_NAMES = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
} as const;

export type MonthIndex = keyof typeof MONTH_NAMES;

export type Props = {
  month: MonthIndex;
  firstWeekday?: number;
};

const styles = memoize((firstWeekday) =>
  css({
    width: '6em',
    flexShrink: 0,
    marginRight: `${firstWeekday * 2}em`,
  })
);

const MonthName: React.FC<Props> = ({ month, firstWeekday = 0 }) => (
  <div className={styles(firstWeekday)}>{MONTH_NAMES[month]}</div>
);

export default MonthName;
