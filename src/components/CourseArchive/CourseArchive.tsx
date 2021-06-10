import { Container, Typography } from '@material-ui/core'
import useStyles from '../Styles/Styles'

function CourseArchive() {

  const classes = useStyles()

  return (
    <Container className={classes.courseContent}>
      <Typography variant='body1' >
        Here will be all sessions of a course. <br/>
        The past sessions will be unlocked. <br/>
        The future ones will be locked, meaning you will have to study or take a test to reach them.
      </Typography>
    </Container>
  )
}

export default CourseArchive
