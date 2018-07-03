# Redux
This week we will explore why we would want to use redux, and how we can implement redux in a react application.


## Challenge 1 - A Redux Based App
By creating a store and using the dispatch && subscribe APIs, we will create a small redux based application. On each update to the store, we should rerender a button and a count of how many times the button has been clicked.

To do this exercise, lets use the [Code Sandbox](https://codesandbox.io/s/v8p75vno3). In the sandbox open `src/index.js`. This is where we will build our app.

As you can see there is already a render method in the source, which is then being called. Currently the render button is rendering a hard coded count value, and the button handler opens an alert instead of dispatching an action.

### Define Store
  * create a reducer, that updates a counter in state when `action.type === 'increment'`
  * create our store with the reducer and an initial state of `{ count: 0 }`

### Subscribe
  * pass render to our stores subscribe
  * update render to render the count value inside our store in the span
  * update the button handler to dispatch an action of `{ type: 'increment' }`


### Additional excercise
Its quite common for actions to also need to dispatch data along with the `action.type`. We normally assign this to `action.payload`. lets update our reducer to increment based on a value stored on the payload key. Then lets make our action that we dispatch include a payload of the current count value (this should create an exponential increment).



## Challenge 2 - Redux In Our App


## Challenge 3 - Posts View
