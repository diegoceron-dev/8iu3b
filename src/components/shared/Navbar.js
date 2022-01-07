import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  navbar:{
    backgroundColor: theme.palette.error.dark,
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative"  className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <Link to={'/'}>
          <img src={logo} alt="Logo" width={'180px'} />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar