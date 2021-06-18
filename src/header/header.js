import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import MainPage from "../mainPage/mainpage"
import TasksPage from "../tasksPage/taskspage"
import StatisticPage from "../statisticsPage/statisticspage"

export default function Header() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li> <NavLink  to="/">Главная</NavLink > </li>
          <li> <NavLink  to="/tasks">Задачи</NavLink > </li>
          <li> <NavLink  to="/statistics">Статистика</NavLink > </li>
        </ul>

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/tasks" component={TasksPage} />
          <Route path="/statistics" component={StatisticPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}



