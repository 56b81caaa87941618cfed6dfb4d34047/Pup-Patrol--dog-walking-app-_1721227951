/* Summary: This is a VueJS file that sets up a Vue.js application with the following components:
1. **VUEDEC**: Declares the Vue.js app and binds it to the HTML element with the ID "app".
2. **DATVAR**: Defines the data variables used in the application, including `status`, `example_vuejs_variable`, and any other variables that may be added.
3. **METHODS**: Defines the methods used in the application, including `example_api_call` for fetching data from an API endpoint.
4. **VUEEND**: Specifies the code to be executed when the Vue.js component is mounted in the DOM, which includes calling the `getTasks()` method.
Overall, this file sets up a basic Vue.js application with some functionality for managing data and interacting with a backend API.

This JS file contains application logic. If a change needs to be made to a component, select that component's file and not this file.

*/

// VUEDEC | VueJS declaration
// Declaration Vue app and element(s)
var app = new Vue({
    el: '#app',
    delimiters: ['{','}'],
 
 // DATVAR | Data variables
 // List of Data variables with their values
    data: { //start of data variables
        status : true,
        example_vuejs_variable : 'Space and Time',
        expanded: false, //This is a mandatory field for the code
        tab: null, //This is a mandatory field for the code
        //add any new variables here
    }, //end of data variables
 
 // MTHODS | VueJS Methods 
 // List of method definitions
    methods: { //start of VueJS methods 

        // you can define any new methods here
 
    }, // end of VueJS methods
 
 // VUEEND | Concluding VueJS
 // Defining code to run when the app starts
    mounted(){ //start of code that will be executed after the component is mounted in the DOM.

        // you can call any methods here which you want to be executed when the component is mounted
 
     // end of code executed when the component is mounted

    }}) //end script.js