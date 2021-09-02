import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'




function App() {
  return (
    <div className="App">
        <div>
            <Router>
              <Header/>
              <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/about"  component={About} />
                <Route exact path="/services"  component={Services} />
                <Route exact path="/projects"  component={Projects} />
                <Route exact path="/contact"   component={Contact} />
              </Switch>
           </Router>
           <Footer/>
        </div>

        
        
    </div>
  );
}

export default App;
