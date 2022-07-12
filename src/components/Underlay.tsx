import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export default function Underlay({ className, children, ...props }: any) {
  console.log(children)
  return <Container className={className}>{children}</Container>
}
