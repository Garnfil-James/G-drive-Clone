class Navbar extends React.Component {
  

  render() {
 
    return (
      <div>
      <div onClick={this.props.hideNav} className='spans2' style={{opacity: this.props.displaySpan ? '1' : '0'}}>
      </div>
        <nav style={{left: this.props.displayNav ? -100 + '%' : 0 + '%'}}>
         <div className='logo'>
          <h1>Google Drive</h1>
         </div>
         <div className='nav-content'>
          <div className='option'>
            <span><i class="far fa-clock"></i></span>
            <h5>Recent</h5>
          </div>
          <div className='option'>
            <span><i class="far fa-check-circle"></i></span>
            <h5>Offline</h5>
          </div>
          <div className='option'>
            <span><i class="far fa-trash-alt"></i></span>
            <h5>Trash</h5>
          </div>
          <div className='option'>
            <span><i class="fas fa-cloud-download-alt"></i></span>
            <h5>Backups</h5> 
          </div>
          <div className='option'>
            <span><i class="fas fa-cog"></i></span>
            <h5>Settings</h5>
          </div>
          <div className='option'>
            <span><i class="far fa-question-circle"></i></span>
            <h5>Help & feedback</h5>
          </div>
          <div className='option'>
            <span><i class="fas fa-cloud"></i></span>
            <h5>Storage</h5>
          </div>
          <div className='max-range'>
            <div className='min-range'>
            </div>
          </div>
          <p>315.65 MB of 15.0 GB</p>
         </div>
        </nav>
      </div>
    )
  }
}


class Header extends React.Component {
  
  state = {
    displayNav: true,
    displaySpan: false
  }
  
  showNav = () => {
    this.setState({
      displayNav: !this.state.displayNav,
      displaySpan: true
    })
  }
  
  hideNav = () => {
    this.setState({
      displayNav: true,
      displaySpan: false
    })
  }
  
  render() {
    return(
      <div>
       <Navbar 
        hideNav={this.hideNav}
        displaySpan={this.state.displaySpan} 
        displayNav={this.state.displayNav} 
       />
      <div className="head-container">
        <div className='first-head'>
          <button onClick={this.showNav} className='menu'><i class="fas fa-bars"></i></button>
          <input className="searchbar" placeholder='Search in Drive' />
          <span className='profile'><img src='images/profile.jpg'/></span>
        </div>
        <div className='second-head'>
          <button className='suggestedBtn'>Suggested</button>
          <button className='notifBtn'>Notifications</button>
        </div>
      </div>
      </div>
    )
  }
}



class BottomNav extends React.Component {
  render() {
    return(
      <div className='bottom-nav'>
        <div className='bottom'>
          <span className='active-icon'><i class="fas fa-home"></i></span>
          <h4>Home</h4>
        </div>
        <div className='bottom'>
          <span><i class="far fa-star"></i></span>
          <h4>Starred</h4>
        </div>
        <div className='bottom'>
          <span><i class="fas fa-user-friends"></i></span>
          <h4>Shared</h4>
        </div>
        <div className='bottom'>
          <span><i class="far fa-folder"></i></span>
          <h4>Files</h4>
        </div>
      </div>
      )
  }
}


class Options extends React.Component {
  
  state = {
      touch: false,
    }
    
  onTouchOpt = e => {
    let cnd = e.touches[0].clientY < 400 ? true:false;
    this.setState({
      touch: cnd
    })
  }
  
    spanStyle = {
      opacity: this.props.span ? '1' : '0',
    }
   
  
  render() {
    if (!this.props.displayOpt) {
      return null 
    }
    
    return (
      <div>
      <div className='spans' onClick={this.props.hideOpt} style={this.spanStyle}></div>
      <div onTouchMove={this.onTouchOpt} style={{height: this.state.touch ? '100vh' : '75vh'}}  className='option-container'>
        <div className='head-option'>
          <span><img src={this.props.type} /></span>
          <h6>{this.props.name}</h6>
        </div>
        <div className='first-option'>
          <div className='option'>
            <span><i class="far fa-star"></i></span>
            <h5>Add to Starred</h5>
          </div>
          <div className='option'>
            <span><i class="far fa-check-circle"></i></span>
            <h5>Make available offline</h5>
          </div>
        </div>
        <div className='second-option'>
          <div className='option'>
             <span><i class="far fa-clone"></i></span>
             <h5>Copy Link</h5>
          </div>
          <div className='option'>
             <span><i class="far fa-copy"></i></span>
             <h5>Make a Copy</h5>
          </div>
           <div className='option'>
             <span><i class="fas fa-share"></i></span>
             <h5>Send a Copy</h5>
           </div>
        </div>
        <div className='third-option'>
          <div className='option'>
            <span><i class="fas fa-arrows-alt"></i></span>
            <h5>Open with</h5>
          </div>
          <div className='option'>
            <span><i class="fas fa-download"></i></span>
            <h5>Download</h5>
          </div>
          <div className='option'>
            <span><i class="far fa-folder"></i></span>
            <h5>Show file location</h5>
          </div>
          <div className='option'>
            <span><i class="fab fa-google-drive"></i></span>
            <h5>Add shortcut to Drive</h5>
          </div>
          <div className='option'>
            <span><i class="fas fa-exclamation-circle"></i></span>
            <h5>Details & Activity</h5>
          </div>
          <div className='option'>
            <span><i class="fas fa-print"></i></span>
            <h5>Print</h5>
          </div>
          <div className='option'>
            <span><i class="fas fa-mobile-alt"></i></span>
            <h5>Add to Home Screen</h5>
          </div>
          <div className='option'>
            <span><i class="fas fa-exclamation-circle"></i></span>
            <h5>Report Abuse</h5>
          </div>
        </div>
      </div> 
      </div>
    )
  }
}


class File extends React.Component {
  
  state = {
    displayOpt: false,
    filename: this.props.file.filename,
    type: this.props.file.cl,
    body: document.body.style.position = 'relative',
    span: true
  }
  
  showOpt = () => {
    console.log('cliked')
    this.setState({
      displayOpt: !this.state.displayOpt,
      body: document.body.style.position = 'fixed',
    })
  }
  
  hideOpt = () => {
    this.setState({
      displayOpt: false,
      body: document.body.style.position = 'relative'
    })
  }
  
  render() {
    return(
      <div className='file'>
        <div className='first'>
          <img src={this.props.file.cl} />
          <h4>{this.props.file.filename}</h4>
          <button onClick={this.showOpt}><i class="fas fa-ellipsis-v"></i></button>
        </div>
        <div className='second'>
          <img src={this.props.file.img} />
        </div>
        <Options 
          hideOpt = {this.hideOpt}
          span={this.state.span} 
          displayOpt={this.state.displayOpt} 
          name={this.state.filename} 
          type={this.state.type} 
        />
      </div>
    )
  }
}


class Files extends React.Component {
  render() {
    return this.props.files.map(file => <div className='file-container'> <File key={file.id} file={file}/> </div>);
  }
}


class App extends React.Component {
  
  state = {
    files: [
      {
        id: 1,
        filename: 'File Learn React Js.docx',
        cl: 'images/docx.png',
        img: 'images/file1.png'
      },
      {
        id: 2,
        filename: 'File Learn Programming.docx',
        cl: 'images/docx.png',
        img: 'images/file3.png'
      },
      {
        id: 3,
        filename: 'File Create An App.pdf',
        cl: 'images/pdf.png',
        img: 'images/file2.png'
      }
    ],
    displayBtn: false,
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleslScroll)
  }
  

  handleslScroll = () => {
    let value = window.scrollY
    let cond = value > 10 ? true : false

    this.setState({
      displayBtn: cond
    })
  }
  
  
  
  render() {
    return(
       <div>
         <button style={{opacity: this.state.displayBtn ? '0' : '1'}} className='add'>+</button>
         <Header showNav={this.showNav} />
         <Files files={this.state.files} />
         <BottomNav />
       </div>
    )
  }
  
}


ReactDOM.render(<App/>, document.getElementById('root'));