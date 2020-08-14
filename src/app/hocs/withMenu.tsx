import React, {FC, ComponentType, useState} from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Paper,
  Typography,
  Breadcrumbs,
} from '@material-ui/core';
import Header from '../components/Header';
import MenuLeft from '../components/MenuLeft';
import {HeightWrapped} from '../../assets/constants';
import {useLocation, Link} from 'react-router-dom';
import {routersContentHome} from '../router/Routers';

export default (WrappedComponent: ComponentType<any>) => {
  const HocComponent: FC<any> = ({...props}) => {
    const classes = useStyles();
    const [path, setPath] = useState('');

    const _getNamePath = (_path: string) => {
      const values = Object.values(routersContentHome);
      for (const item of values) {
        if (_path === item.path) {
          return item.name;
        }
      }
      return '';
    };

    const location = useLocation();
    React.useEffect(() => {
      setPath(location.pathname);
    }, [location]);

    return (
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={2}>
              <MenuLeft />
            </Grid>
            <Grid container item xs={10}>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.wrapped}>
                  <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
                    <Link to="/">
                      <Typography color="textSecondary" variant="caption" component="span">
                        Project Name
                      </Typography>
                    </Link>
                    <Typography color="textPrimary" variant="caption" component="span">
                      {_getNamePath(path)}
                    </Typography>
                  </Breadcrumbs>
                  <WrappedComponent {...props} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
  return HocComponent;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: theme.palette.background.default,
      minHeight: '100vh',
      overflow: 'hidden',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    wrapped: {
      height: HeightWrapped,
      background: theme.palette.background.default,
      padding: theme.spacing(2),
      overflowX: 'hidden',
      overflowY: 'auto',
    },
    breadcrumb: {
      marginBottom: theme.spacing(1),
    },
  }),
);
