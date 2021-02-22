// Once you link both React and ReactDOM libraries 
// you will have access to two global variables `React` and `ReactDOM`

// console.log(React)

// console.log(ReactDOM)


// let element = "Hello Ironhackers!"

// let element = React.createElement('h1', null, "Hello Ironhackers!")

function Header() {
  return <div><h1>"Hello Ironhackers!"</h1></div>
}

function Footer() {
  return <h5>"Made by No One</h5>
}

class MainSection extends React.Component {
  
  render(){
    return <h3>My main section is here!!</h3>
  }
}



let element = (
  <div>
    <Header />
    <MainSection />
    <Footer />
  </div>
  )



ReactDOM.render(element, document.querySelector('#myApp'))

/* same as ↑
ReactDOM.render(<Header/>, document.querySelector('#myApp'))
*/