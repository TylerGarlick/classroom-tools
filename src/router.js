import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FontIcon } from 'material-ui';

import Routes from './routes';

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { collapsed: true };
  }

  render() {
    return (
      <Router>
        <div className="AppShell">
          <aside className={this.state.collapsed ? 'collapsed' : 'expanded'}>
            <nav>
              <a href="/"><FontIcon className="material-icons">home</FontIcon><strong>Dashboard</strong></a>
              <a href="/questions"><FontIcon className="material-icons">question_answer</FontIcon><strong>Questions</strong></a>
              <a href="/queue"><FontIcon className="material-icons">format_list_numbered</FontIcon><strong>Help Queue</strong></a>
            </nav>
            <nav className="footer">
              <a href="/settings"><FontIcon className="material-icons">settings</FontIcon><strong>Settings</strong></a>
            </nav>
          </aside>
          <section name="sidebar-action">
            <FontIcon className="material-icons" onClick={e => this.setState({ collapsed: !this.state.collapsed })}>{this.state.collapsed ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}</FontIcon>
          </section>

          <article>
            <Switch>
              <Route exact path="/" component={Routes.Home._default} />
              <Route exact path="/questions" component={Routes.Questions.list} />
              <Route exact path="/questions/new" component={Routes.Questions.update} />
              <Route exact path="/questions/edit/:id" component={Routes.Questions.update} />
              <Route exact path="/questions/:id" component={Routes.Questions.detail} />

              <Route exact path="/queue" component={Routes.Queue._default} />
              <Route exact path="/settings" component={Routes.Settings._default} />
              <Route component={Routes.NotFound._default} />
            </Switch>
          </article>
        </div>

      </Router>
    )
  }

}

// export default () => {
//
//
//
//   return (
//     <Router>
//       <div className="AppShell">
//         <aside>
//           <nav>
//             <ul>
//               <li><a href="/"><FontIcon className="material-icons">home</FontIcon></a></li>
//               <li><FontIcon className="material-icons" onClick={e => alert('booyah')}>menu</FontIcon></li>
//             </ul>
//           </nav>
//         </aside>
//         <article>
//           <Switch>
//             <Route exact path="/" component={Routes.Home._default} />
//             <Route exact path="/questions" component={Routes.Questions.list} />
//             <Route exact path="/questions/new" component={Routes.Questions.update} />
//             <Route exact path="/questions/edit/:id" component={Routes.Questions.update} />
//             <Route exact path="/questions/:id" component={Routes.Questions.detail} />
//             <Route component={Routes.NotFound._default} />
//           </Switch>
//         </article>
//       </div>
//
//     </Router>
//   )
// };