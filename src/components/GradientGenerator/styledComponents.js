import styled from 'styled-components'

export const Background = styled.div`
  background-image:${props=> linear-gradient(to props.directionValue, #8ae323, #014f7b)};
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;
  padding: 80px;
  text-align: center;
`

export const Heading = styled.h1`
  color: white;
`
export const P = styled.p`
  font-weight: bold;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-left: 220px;
`
export const SelectionBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Select = styled.div`
  margin-right: 30px;
`

export const SelectLeftBtn = styled.div`
  background-color: #8ae323;
`

export const SelectRightBtn = styled.div`
  background-color: #014f7b;
`
