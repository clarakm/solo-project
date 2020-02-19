class App extends Component {
    render () {
         return (
          <div className="home">
            <main>
             {/* <Switch>
               <Route
                exact
                path='/'
                component={Events}
               />
               <Route
                exact
                path='/create'
                component={CreateEvent}
               />
             </Switch> */}
             <EventCard />
            </main>
          </div>
        );
    }
  }
    