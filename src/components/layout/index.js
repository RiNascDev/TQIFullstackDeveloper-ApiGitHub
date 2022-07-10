import React from 'react'
import Header from '../header';
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.WrappperLayout>
      <Header/>
      {children}
    </S.WrappperLayout>
  )
}

export default Layout;
