import styled from 'styled-components'

export const Background = styled.div`
  background-image: linear-gradient(
    to ${props => props.directionValue},
    ${props => (props.generate ? props.firstColor : props.color1)},
    ${props => (props.generate ? props.secondColor : props.color2)}
  );
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

export const Generate = styled.button`
  background-color: #00c9b7;
  border-radius: 3px;
  border-style: none;
`
