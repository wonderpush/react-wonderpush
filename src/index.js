import React, { Component } from 'react';

export default class ReactWP {

    constructor() {
      this.logger = window.console;
      this.instance = null;
    };

    static getInstance() {
        if(!ReactWP.instance) {
            ReactWP.instance = new ReactWP();
        }
        return this.instance;
    }
    /**
     * init
     * The script URI correspond to the wonderpush init
     * @param {string} id tof the application
     * @param {key} wonderpush key
     * @param {string} node the node on witch the script will be placed, it can either be head or body
     */
    init(id, key) {
        if(!id) {
            return this.logger.error('You should define the container id.');
        }
        if(typeof id !== 'string') {
            this.logger.warn('The container id should be a string.');
        }

    };

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
