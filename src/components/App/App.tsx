import { ThemeProvider, Container } from '@material-ui/core'
import Theme from '../Styles/Theme'
import useStyles from '../Styles/Styles'
import TitleBar from '../TitleBar/TitleBar'
import NavBar from '../NavBar/NavBar'
import CourseContent from '../CourseContent/CourseContent'
import CourseList from '../CourseList/CourseList'

function App() {

  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <Container className={classes.app}>
        <TitleBar />
        <NavBar />
        { true
          ?
          <CourseContent />
          :
          <CourseList />
        }
      </Container>
    </ThemeProvider>
  )
}

export default App
