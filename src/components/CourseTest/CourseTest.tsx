import { Container, Typography } from '@material-ui/core'
import useStyles from '../Styles/Styles'

function CourseTest() {

  const classes = useStyles()

  return (
    <Container className={classes.courseContent}>
      <Typography variant='body1' >
        There will be a test in the end of each studying session. <br/>
      </Typography>
    </Container>
  )
}

export default CourseTest
