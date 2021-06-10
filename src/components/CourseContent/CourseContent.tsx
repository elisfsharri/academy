import { Container, Typography } from '@material-ui/core'
import useStyles from '../Styles/Styles'

function CourseContent() {

  const classes = useStyles()

  return (
    <Container className={classes.courseContent}>
      <Typography variant='body1' >
        Here will be the articles related to each course. <br/>
        The data will come from the backend. <br/>
        There will be a next button to take you to the quiz related to the current study session. <br/>
        There will also be an archive button to show all sessions of a course.
      </Typography>
    </Container>
  )
}

export default CourseContent
