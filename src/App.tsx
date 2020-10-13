import * as React from "react";

export interface AppProps {
  name: string;
}
export const App = (props: AppProps) => (
  <h1>
    Hi! Welcome to {props.name}!
  </h1>
);