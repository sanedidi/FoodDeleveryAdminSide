import { Box } from '@chakra-ui/react'
import { CreateIcon, FolderIcon } from 'components/SvgComponents/SvgComponents'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBox = ({gg, icon, hh, icon1, path}) => {
  return (
    <Box
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontWeight: "400",
    }}
  >
    <Link
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "18px",
      }}
      to={path}
    >
      {icon1}
      {gg}
    </Link>
    <Link
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "18px",
        color: "blue",
      }}
    >
      {icon}
     {hh}
    </Link>
  </Box>
  )
}

export default HeaderBox