import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import ProjectPage from "./components/ProjectPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
