import {Component} from 'react'
import {
  Background,
  Select,
  SelectionBg,
  Generate,
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
  state = {
    changeBtn: 'top',
    generate: false,
    firstColor: '',
    secondColor: '',
  }

  onChangeBtn = value => {
    this.setState({changeBtn: value})
  }

  generateBtn = () => {
    this.setState({generate: true})
  }

  onChangeLeftColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeRightColor = event => {
    this.setState({secondColor: event.target.value})
  }

  render() {
    const {changeBtn, generate, firstColor, secondColor} = this.state
    return (
      <Background
        generate
        color1="#8ae323"
        color2="#014f7b"
        firstColor
        secondColor
        directionValue={changeBtn}
      >
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
            <P>#8ae323</P>
            <input
              value={firstColor}
              onChange={this.onChangeLeftColor}
              type="color"
            />
          </Select>
          <div>
            <P>#014f7b</P>
            <input
              value={secondColor}
              onChange={this.onChangeRightColor}
              type="color"
            />
          </div>
        </SelectionBg>
        <Generate type="button" onClick={this.generateBtn}>
          Generate
        </Generate>
      </Background>
    )
  }
}

export default GradientGenerator
