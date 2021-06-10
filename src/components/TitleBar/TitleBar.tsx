import { Container, Typography, IconButton } from '@material-ui/core'
import Brightness6Icon from '@material-ui/icons/Brightness6'
import useStyles from '../Styles/Styles'
import Language from '../Language/Language'
import User from '../User/User'

function TitleBar() {

  const classes = useStyles()

  return (
    <Container className={classes.titleBar}>
      <div>
        <IconButton>
          <Brightness6Icon />
        </IconButton>
        <Language />
      </div>
      <Typography variant='h3' >
        Academy app
      </Typography>
      <User />
    </Container>
  )
}

export default TitleBar
