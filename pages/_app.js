import '../styles/globals.css';
import Footer from '../components/Footer';
// import { Toolbar } from '../components/toolbar';


// Put this in your _app.js file
if (global.window) {
  global.addEventListener('load', (event) => {
    const watcher = window.document.getElementById('__next-build-watcher')
    if (watcher) {
        const newStyle = global.document.createElement('style')
        newStyle.innerHTML = '#icon-wrapper { width: 100vw!important; height: 100vh!important; opacity: 0.3!important; } #container { background: rgba(0, 0, 0, 0.3)!important; }'
        watcher.shadowRoot.appendChild(newStyle)
    }
  });
}


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps
  
  } /> 

}

export default MyApp
