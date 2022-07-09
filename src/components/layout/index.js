import React from 'react'
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.WrappperLayout>
      <header>header</header>
      {children}
    </S.WrappperLayout>
  )
}

export default Layout;
