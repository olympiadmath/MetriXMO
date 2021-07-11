import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(6),
    color: theme.palette.grey[900]
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" style={{ color: 'black' }} gutterBottom>
          MMO
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Yearly Online Mathematical Olympiad
        </Typography>
        <Copyright />
      </footer>
    </>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://ayushkr.me/">
       MetriX Mathematical Olympiad
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
