import { Container, Typography } from '@material-ui/core'

function CourseList() {

  return (
    <Container>
      <Typography variant='body1' >
        Clicking the + button will take you here. <br/>
        All available courses should be listed here. <br/>
        There should be a search bar on the top to filter relevant courses.
      </Typography>
    </Container>
  )
}

export default CourseList
