import React, { Component } from 'react';
import { setTimeout } from 'timers';

export default class ReactWP {

    constructor(tagElement) {

      this.logger = {
        log: function() {},
        warn: function() {},
        error: function() {}
      };

      this.instance = null;
      this.addScriptTag('wonderpush-jssdk-loader', 'https://cdn.by.wonderpush.com/sdk/1.1/wonderpush-loader.min.js', tagElement);
    };

    static getInstance(tagElement) {
        if(!ReactWP.instance) {
            ReactWP.instance = new ReactWP(tagElement);
        }
        return this.instance;
    }
    /**
     * addScriptTag
     * The script URI correspond to the wonderpush init
     * @param {string} id tof the application
     * @param {key} wonderpush key
     * @param {string} node the node on witch the script will be placed, it can either be head or body
     */
    addScriptTag(id, uri, tagElement){
        let wonderpushContainer = document.createElement('script');
        wonderpushContainer.setAttribute('type', 'text/javascript');
        wonderpushContainer.setAttribute('src', uri);
        wonderpushContainer.setAttribute('id', id);

        if(!tagElement || typeof tagElement !== 'string' || tagElement.toLowerCase() === 'head'
            || typeof window.document.getElementsByTagName(tagElement.toLowerCase())[0] === 'undefined') {

            return window.document.getElementsByTagName('head')[0].appendChild(wonderpushContainer);
        }
        window.document.getElementsByTagName(tagElement.toLowerCase())[0].appendChild(wonderpushContainer);
    }


    /**
     * init
     * function to init wonderpush SDK
     * @param {string} webKey tof the application
     * @param {Object}  optInoptions
     */

    init(webKey, optInoptions){
        if(!window.WonderPush) {
            return setTimeout(() => {
                this.init(webKey, optInoptions);
            }, 1000);
        }
        window.WonderPush.init({
            webKey: webKey,
            optInOptions: optInoptions
        });

        this.logger.log('WONDERPUSH SDK INITIALIZED');
        this.logger.log('WEBKEY', webKey);
        this.logger.log('OPT IN OPTIONS', optInoptions);
    }

    /**
     * Will display the debug messages if true
     * @param {boolean} boolean if set to true it will activate the debug msg default is false
     */
    setDebug(boolean) {
        if(boolean) {
          this.logger = window.console;
        } else {
            this.logger = {
              log: function() {},
              warn: function() {},
              error: function() {}
          };
        }
    };
};
