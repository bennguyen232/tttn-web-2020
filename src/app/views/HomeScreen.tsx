import React, {FC} from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
  Card,
  Typography,
  CardContent,
} from '@material-ui/core';
import CreateProject from '../components/CreateProject';
import {selectors, RootState} from '../redux/Slices';
import {connect} from 'react-redux';
import {Project} from '../models';
import store from '../redux/store';
import {setProjectActive} from '../redux/Slices/GlobalsSlice';
import {useHistory} from 'react-router-dom';

interface ItemProps {
  data: Project;
}

const Item: FC<ItemProps> = ({data}) => {
  const classesItem = useStylesItem();
  const history = useHistory();
  const {Id, Name, Description} = data;
  const _moveContentPage = () => {
    console.log(Id);

    store.dispatch(setProjectActive(Id));
    history.push('/issues');
  };
  return (
    <Card className={classesItem.cardItem} elevation={3} onClick={_moveContentPage}>
      <CardContent>
        <Typography variant="h4" component="h2">
          {Name}
        </Typography>
        <Typography variant="inherit" component="p">
          {Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

type Props = ReturnType<typeof mapStateToProps>;

export const HomeScreen: FC<Props> = ({Projects}) => {
  const classes = useStyles();
  console.log(Projects);

  const _renderItems = () => {
    return Projects.map((item, index) => {
      return <Item key={index} data={item} />;
    });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={2} className={classes.bgTop}>
          <Typography variant="h2" component="h1" align="center" className={classes.title}>
            Welcome to CMS Manager Project
          </Typography>
        </Paper>
        <Paper elevation={2} className={classes.content}>
          <Grid container>
            <CreateProject />
            {_renderItems()}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  Projects: selectors.globals.select(state).Projects || [],
});

export default connect(mapStateToProps)(HomeScreen);

const heightBg = 350;
const heightItem = 200;
const useStyles = makeStyles(({spacing, palette}: Theme) =>
  createStyles({
    bgTop: {
      height: heightBg,
      background: palette.primary.main,
    },
    content: {
      marginTop: -heightItem / 2,
      background: 'transparent',
      padding: spacing(1, 5),
    },
    title: {
      fontWeight: 600,
      paddingTop: 50,
      color: palette.grey[100],
    },
  }),
);

export const useStylesItem = makeStyles(({spacing, shadows}: Theme) =>
  createStyles({
    cardItem: {
      height: heightItem,
      width: (heightItem * 4) / 3,
      margin: spacing(0, 1),
      cursor: 'pointer',
      '&:hover': {
        boxShadow: shadows[6],
      },
    },
  }),
);
