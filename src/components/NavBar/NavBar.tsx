import { ButtonGroup, Button } from '@material-ui/core'

function NavBar() {

  return (
    <ButtonGroup variant='contained' size="small">
        <Button>Course 1</Button>
        <Button>Course 2</Button>
        <Button>Course 3</Button>
        <Button>+</Button>
    </ButtonGroup>
  )
}

export default NavBar
