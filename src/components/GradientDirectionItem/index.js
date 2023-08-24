import {List, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionInfo, onChangeBtn} = props
  const {displayText, value} = directionInfo

  const onClickBtn = () => {
    onChangeBtn(value)
  }
  return (
    <List data-testid="gradientGenerator">
      <Button type="button" onClick={onClickBtn}>
        {displayText}
      </Button>
    </List>
  )
}

export default GradientDirectionItem
