import { Box } from '@chakra-ui/react'
import { CreateIcon, FolderIcon } from 'components/SvgComponents/SvgComponents'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBox = () => {
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
      to={"/admin/categories"}
    >
      <FolderIcon />
      Категории
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
      <CreateIcon />
      Создать
    </Link>
  </Box>
  )
}

export default HeaderBox