import { Breadcrumbs, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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
    },
    titlePokemon: {
        textTransform: "uppercase"
      },
}));

const PokeBreadcrumbs = (props) => {
    const classes = useStyles();
    return <div>
        <Breadcrumbs aria-label="breadcrumb">
            {
                props.items.map((item, index)=> (
                    <Link className={classes.titlePokemon} to={item.url}><Typography color="textPrimary">{item.name}</Typography></Link>
                ))
            }
            
        </Breadcrumbs>
    </div>;
};

export default PokeBreadcrumbs;
