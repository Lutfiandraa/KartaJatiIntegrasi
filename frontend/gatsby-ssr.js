import "./styles/global.css"
import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="particles-js"
      src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
      defer
    />,
  ])
}
