import { css } from '@emotion/css';

const style = css({ borderTop: '1px solid #DDDDDD' });

const Year = ({ children }) => <div className={style}>{children}</div>;

export default Year;
