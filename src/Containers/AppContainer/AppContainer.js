import React from 'react'
import { Route, Redirect } from 'react-router'
import { Link, Switch } from 'react-router-dom'
import Courses from '../../Components/Courses/Courses'
import Users from '../../Components/Users/Users'

const appContainer = (props) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/courses" component={Courses} />
        <Route path="/users" component={Users} />
        <Redirect from="/all-courses" to="/courses" />
        <Route render={() => <h1>Oops, nothing here!</h1>} />
      </Switch>
    </div>
  )
}

export default appContainer