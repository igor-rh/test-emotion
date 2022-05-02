import React from 'react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import memoize from 'lodash/memoize';

type Props = {
  date: number;
  month: number;
  weekday: number;
};

const styleMemoized = memoize((weekday) =>
  css({
    flexShrink: 0,
    width: '2em',
    textAlign: 'right',
    color: [0, 6].includes(weekday) ? 'red' : 'black',
  })
);

const style = (weekday) =>
  css({
    flexShrink: 0,
    width: '2em',
    textAlign: 'right',
    color: [0, 6].includes(weekday) ? 'red' : 'black',
  });

const styleStr = (weekday) => css`
  flex-shrink: 0;
  width: 2em;
  text-align: right;
  ${[0, 6].includes(weekday) ? 'red' : 'black'}
`;

const styleStrMemoized = memoize(
  (weekday) => css`
    flex-shrink: 0;
    width: 2em;
    text-align: right;
    ${[0, 6].includes(weekday) ? 'red' : 'black'}
  `
);

const styleObj = css({
  flexShrink: 0,
  width: '2em',
  textAlign: 'right',
});

const StyledDay = styled.div((props) => ({
  flexShrink: 0,
  width: '2em',
  textAlign: 'right',
  color: [0, 6].includes(props.weekday) ? 'red' : 'black',
}));

const styleBase = css({
  flexShrink: 0,
  width: '2em',
  textAlign: 'right',
  color: 'black',
});

const styleRed = css({
  color: 'red',
});

const Day: React.FC<Props> = ({ date, weekday }) => {
  // const memoizedStyle = React.useMemo(() => style(weekday), [weekday]);
  return (
    // <div
    //   css={{
    //     flexShrink: 0,
    //     width: '2em',
    //     textAlign: 'right',
    //     color: [0, 6].includes(weekday) ? 'red' : 'black',
    //   }}
    // >
    //   {date}
    // </div>
    // <div
    //   className={css({
    //     flexShrink: 0,
    //     width: '2em',
    //     textAlign: 'right',
    //     color: [0, 6].includes(weekday) ? 'red' : 'black',
    //   })}
    // >
    //   {date}
    // </div>
    // <div className={memoizedStyle}>{date}</div>
    // <div className={styleMemoized(weekday)}>{date}</div>
    <div className={style(weekday)}>{date}</div>
    // <div className={styleStr(weekday)}>{date}</div>
    // <div className={styleStrMemoized(weekday)}>{date}</div>
    // <StyledDay weekday={weekday}>{date}</StyledDay>
    // <div
    //   className={cx(styleBase, {
    //     [styleRed]: [0, 6].includes(weekday),
    //   })}
    // >
    //   {date}
    // </div>
    // <div>{date}</div>
  );
};

export default Day;
