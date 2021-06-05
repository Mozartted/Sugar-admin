// import scenes here and make routes of them
import React from 'react';
import {Route, Redirect, useHistory, Switch} from 'react-router-dom';
import {
	UploadApartment, 
	Apartments,
} from "../pages"

import { onError } from "apollo-link-error";
import {  useToasts } from 'react-toast-notifications'
import { ApolloClient } from 'apollo-client';
import {InMemoryCache} from "apollo-boost";
import { ApolloProvider} from '@apollo/react-hooks';
import {ApolloLink , concat} from "apollo-link"
import cookies from "js-cookie"
import {createUploadLink} from "apollo-upload-client"

const Routes = () => {

	const {addToast} = useToasts();
	let history = useHistory()
  
	const errorLink = onError(({ graphQLErrors, networkError }) => {
	  if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) => {
			if (message.includes("Not Authorised")) {
				addToast(message, {
					appearance: 'error',
					autoDismiss: true
				})
				setTimeout(() => {
					cookies.remove('uat')
					// history.push("/login")
				},500)
			} else {
				addToast(message, {
					appearance: 'error',
					autoDismiss: true
				})
				// snackbarStore.dispatch.snackbar.handleOpen(message);
			}
	  });
	  if (networkError) {
		addToast("Network error, Make sure you have internet access", {
			appearance: 'warning',
			autoDismiss: true
		})
	  }
	});
  
	// const authMiddleware = new ApolloLink((operation, forward) => {
	//   operation.setContext({
	// 	headers: {
	// 	  authorization: `Bearer ${cookies.get('uat')}`
	// 	}
	//   })
	
	//   return forward(operation)
	// })
  
	const link = createUploadLink({
	  uri: process.env.REACT_APP_GRAPHQL_API
	})
  
	// const linker = ApolloLink.from([
	// 	link,
	// 	errorLink,
	// ])

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		// cache: new ObjectCache(),
		link: concat(errorLink, link)
	});
	// const externalClient = new ApolloClient({
	// 	cache: new InMemoryCache(),
	// 	// cache: new ObjectCache(),
	// 	link: link
	// });
	// import 'react-dates/initialize';
	
	return(
		<React.Fragment>
			{/* <ApolloProvider client={externalClient}>
			</ApolloProvider> */}
			<ApolloProvider client={client}>
				<Switch>
					<Route  path="/" exact component={Apartments} />
					<Route  path="/upload" exact component={UploadApartment} />
				</Switch>
			</ApolloProvider>
		</React.Fragment>
	)
};

export default Routes;