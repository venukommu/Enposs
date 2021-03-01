import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoNavbar from "components/Navbars/DemoNavbar.js";

export default class EcwidComponent extends React.Component {
    componentDidMount() {
      $(ReactDOM.findDOMNode(this)).html(`
        <div class="strikingly-ecwid-container-2">
          <div id="productBrowser"></div>
          <script>
            ecwidLoaded = false;
            function load_ecwid() {
              Ecwid.OnAPILoaded.add(function() {
                if (!ecwidLoaded) {
                  ecwidLoaded = true;
                  xProductBrowser("categoriesPerRow=3", "views=grid(3,3) list(10) table(20)", "categoryView=grid", "searchView=list", "id=productBrowser");
                }
              });
            }
            window.ecwid_dynamic_widgets = true;
            if (!document.getElementById('ecwid-script')) {
              var script = document.createElement('script');
              script.charset = 'utf-8';
              script.type = 'text/javascript';
              script.src = 'https://app.ecwid.com/script.js?48163008&data_platform=strikingly';
              script.id = 'ecwid-script'
              script.onload = load_ecwid
              document.body.appendChild(script);
            } else {
              load_ecwid()
            }
          </script>
        </div>
      `)
    }
  
    componentWillUnmount() {
      window.Ecwid.destroy()
      window.ecwidLoaded = false;
    }
  
    render() {
      return (
        <>
        <div id="content">
        <DemoNavbar />
        </div>
        </>
      )
    }
  }
  
  //class PageComponent extends React.Component {
  //  render() {
  //    return <div>This is another page</div>
  //  }
  //}
  
  const content = document.getElementById('content')
  //document.getElementById('page1').addEventListener('click', () => {
  //  ReactDOM.render(<EcwidComponent/>, content)
  //})
  //document.getElementById('page2').addEventListener('click', () => {
  //  ReactDOM.render(<PageComponent/>, content)
  //})
  if (content) {
    ReactDOM.render(<EcwidComponent/>, content)
  }
