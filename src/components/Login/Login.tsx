import { Container, TextField, Button } from '@material-ui/core'
import useStyles from '../Styles/Styles'

function Login() {

  const classes = useStyles()

  return (
    <Container>
      <TextField label='username'/>
      <TextField label='password'/>
      <Button>
        Login
      </Button>
    </Container>
  )
}

export default Login
