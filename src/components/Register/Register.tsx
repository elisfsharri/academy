import { Container, TextField, Button } from '@material-ui/core'
import useStyles from '../Styles/Styles'

function Register() {

  const classes = useStyles()

  return (
    <Container>
      <TextField label='name'/>
      <TextField label='surname'/>
      <TextField label='username'/>
      <TextField label='email'/>
      <TextField label='password'/>
      <TextField label='confirm password'/>
      <Button>
        Register
      </Button>
    </Container>
  )
}

export default Register
