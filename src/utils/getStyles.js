import { makeStyles } from '@material-ui/core/styles';

export const contentClass = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #ccffee 55%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: 500,
        border: 0,
        borderRadius: 3,
        padding: '0 30px',
        marginTop: 50,
    },
});

export const temperatureClass = makeStyles((theme) => ({
    labelControl: {
        paddingRight: 180,
    }
}));

export const weatherCardClass = makeStyles({
    root: {
      maxWidth: 150,
      marginTop: 10,
    },
    title: {
      fontSize: 14,
    },
    card: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    arrowRightClass: {
      paddingBottom: '50px',
      paddingRight: '5px',
    },
    arrowleftClass: {
      paddingRight: '100px',
      paddingleft: '125px',
    },
    cardContainer: {
        maxWidth:'596px' ,
        margin:'0 auto',
    }
});
  