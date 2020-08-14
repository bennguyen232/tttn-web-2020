import {makeStyles, createStyles, Theme} from '@material-ui/core';

const widthTask = 230;

export const useGlobalStyles = makeStyles(({spacing, palette}: Theme) => {
  return createStyles({
    groups: {
      display: 'flex',
      margin: -spacing(1),
    },
    tasks: {
      minWidth: widthTask,
      margin: spacing(1),
      padding: spacing(1),
      paddingBottom: 0,
      background: palette.grey[100],
    },
    task: {
      margin: `${spacing(1)}px 0`,
    },
    taskContent: {
      flex: '1 0 auto',
    },
    w0: {width: 0},
    w25: {width: '25%'},
    w50: {width: '50%'},
    w70: {width: '75%'},
    w100: {width: '100%'},
    h0: {height: 0},
    h25: {height: '25%'},
    h50: {height: '50%'},
    h70: {height: '75%'},
    h100: {height: '100%'},
    // margin
    m0: {margin: spacing(0)},
    m1: {margin: spacing(1)},
    m2: {margin: spacing(2)},
    m3: {margin: spacing(3)},
    m4: {margin: spacing(4)},
    m5: {margin: spacing(5)},
    //padding
    p0: {padding: spacing(0)},
    p1: {padding: spacing(1)},
    p2: {padding: spacing(2)},
    p3: {padding: spacing(3)},
    p4: {padding: spacing(4)},
    p5: {padding: spacing(5)},
  });
});
