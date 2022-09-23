import React, { useState } from "react"
import Box from "@mui/material/Box"

import "./App.css"
import Counter from "./components/Counter"
import Toggle from "./components/Toggle"
import { Button } from "@mui/material"

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px",
        height: "100vh"
      }}
    >
      <Counter />
      {show && <Toggle />}
      <Button
        color="error"
        variant="contained"
        onClick={() => setShow(!show)}
      >
        Toggle toggle
      </Button>
    </Box>
  )
}

export default App
