import React from 'react';
import { useEffect, useRef,useState } from "react";
import { withRouter } from "react-router";

const Store=(props) => {
  
    const storeDiv = useRef(null);
    const scriptRef = useRef(null);

    window.localStorage.setItem("show_ecwid_logs","true")
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;
    window.ec = window.ec || Object();
    window.ec.storefront = window.ec.storefront || Object();
    window.ec.enable_catalog_on_one_page = true;
    window._xnext_initialization_scripts = [{
      widgetType: 'ProductBrowser',
      id: 'my-store-48163008',
      arg: ["id=productBrowser", "views=grid(20,3)"]  },
      {
        widgetType: 'CategoriesV2',
        id: 'my-categories-48163008',
        arg: ["id=categoriesV2"]
      }
      ,
      {
        widgetType: 'SearchWidget',
        id: 'my-search-48163008',
        arg: ["id=searchWidget"]
      }
    ];
   // document.getElementById('my-store-1003').appendChild(script);

    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = 'https://app.ecwid.com/script.js?48163008';
    script.defer = true;
    script.ref=scriptRef;
    script.async = true;

  useEffect(() => {
    console.log(!scriptRef.current)
      if(!scriptRef.current){
        storeDiv.current.appendChild(script);
      }
  });


    return (
      <>
        <div id="my-search-48163008"></div>
        <div id="my-categories-48163008"></div>
        <div id="my-store-48163008" ref={storeDiv}></div>
        <div className="ec-cart-widget"></div>
      </>
      );

    }

    export default withRouter(Store);


    