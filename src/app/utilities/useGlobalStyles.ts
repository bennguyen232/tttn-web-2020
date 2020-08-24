import {makeStyles, createStyles, Theme} from '@material-ui/core';

const widthTask = 230;

export const useGlobalStyles = makeStyles(({spacing, palette, shadows}: Theme) => {
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
      margin: spacing(1, 0),
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
    mh25: {minHeight: '25%'},
    mh50: {minHeight: '50%'},
    mh70: {minHeight: '75%'},
    mh100: {minHeight: '100%'},
    //
    resetPdMg: {margin: spacing(0), padding: spacing(0)},
    // margin
    m0: {margin: spacing(0)},
    m1: {margin: spacing(1)},
    m2: {margin: spacing(2)},
    m3: {margin: spacing(3)},
    m4: {margin: spacing(4)},
    m5: {margin: spacing(5)},

    ml1: {marginLeft: spacing(1)},
    ml2: {marginLeft: spacing(2)},

    //padding
    p0: {padding: spacing(0)},
    p1: {padding: spacing(1)},
    p2: {padding: spacing(2)},
    p3: {padding: spacing(3)},
    p4: {padding: spacing(4)},
    p5: {padding: spacing(5)},
    py1: {padding: spacing(1, 0)},
    py2: {padding: spacing(2, 0)},
    // flex
    f1: {
      flex: 1,
    },
    d_flex: {display: 'flex'},
    d_flexStart: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    //shadow
    shadow1: {boxShadow: shadows[2]},
    // border
    bb1: {
      borderBottom: `1px solid ${palette.grey[400]}`,
    },
    bt1: {
      borderTop: `1px solid ${palette.grey[400]}`,
    },
    bl1: {
      borderLeft: `1px solid ${palette.grey[400]}`,
    },
    br1: {
      borderRight: `1px solid ${palette.grey[400]}`,
    },
    // custom html
    customTxtArea: {
      padding: spacing(1),
      borderRadius: 4,
      color: 'rgba(0, 0, 0, 0.87)',
      cursor: 'text',
      fontSize: '1rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: '1.1876em',
      letterSpacing: '0.00938em',
      outline: 'none',
      border: '1px solid rgba(0, 0, 0, 0.23)',
      '&:hover': {
        border: '1px solid rgba(0, 0, 0, 0.87)',
      },
    },
  });
});
