import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => createStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  courseContent: {
    minHeight: 600
  }
}))

export default useStyles