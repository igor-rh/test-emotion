import { css } from '@emotion/css';

import MonthName, { Props } from './MonthName';

const styles = css({
  display: 'flex',
});

const Month: React.FC<Props & { children: React.ReactNode }> = ({
  children,
  month,
  firstWeekday,
}) => (
  <div className={styles}>
    <MonthName month={month} firstWeekday={firstWeekday} />
    {children}
  </div>
);

export default Month;
