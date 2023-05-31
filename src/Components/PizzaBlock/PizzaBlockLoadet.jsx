import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockLoadet = (props) => (
  <ContentLoader 
  className="pizza-block"
  speed={1}
  width={280}
  height={470}
  viewBox="0 0 280 470"
  backgroundColor="#f3f3f3"
  foregroundColor="#FFDF8C"
  {...props}
>
  <circle cx="139" cy="125" r="120" /> 
  <rect x="0" y="276" rx="10" ry="10" width="280" height="27" /> 
  <rect x="0" y="317" rx="10" ry="10" width="280" height="88" /> 
  <rect x="2" y="429" rx="10" ry="15" width="100" height="35" /> 
  <rect x="122" y="420" rx="25" ry="25" width="155" height="50" />
</ContentLoader>
)

export default PizzaBlockLoadet