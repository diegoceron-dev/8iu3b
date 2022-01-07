import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

function CopyrightSection() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

const Footer = () => {
    const classes = useStyles();

    return <>
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Pokedex Challenge
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                <a  target="_blank" href="https://github.com/diegoceron-dev">Desarrollado por Diego Ceron</a>
            </Typography>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
            </ul>
            <CopyrightSection />
        </footer>
    </>;
};

export default Footer;
