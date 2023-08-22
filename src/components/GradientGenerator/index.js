import {Component} from 'react'
import {
  Background,
  Select,
  SelectionBg,
  SelectLeftBtn,
  SelectRightBtn,
  P,
  Ul,
  Heading,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {changeBtn: 'top', firstColor: '', secondColor: ''}

  onChangeBtn = value => {
    this.setState({changeBtn: value})
  }

  leftBtn = () => {
    this.setState({firstColor: 'f'})
  }

  rightBtn = () => {
    this.setState({secondColor: 's'})
  }

  render() {
    const {changeBtn} = this.state
    return (
      <Background directionValue={changeBtn}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <P>Choose Direction</P>
        <Ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              onChangeBtn={this.onChangeBtn}
              directionInfo={each}
              key={each.directionId}
            />
          ))}
        </Ul>
        <P>Pick The Colors</P>
        <SelectionBg>
          <Select>
            <P># 666666</P>
            <SelectLeftBtn onClick={this.leftBtn} type="button">
              #8ae323
            </SelectLeftBtn>
          </Select>
          <div>
            <P># 666666</P>
            <SelectRightBtn onClick={this.rightBtn} type="button">
              #014f7b
            </SelectRightBtn>
          </div>
        </SelectionBg>
      </Background>
    )
  }
}

export default GradientGenerator
