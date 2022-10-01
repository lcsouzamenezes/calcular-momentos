const TEXT_OFFSET = 0.1

const TextSVG = ({x, y, content, anchor='start'}) => {
  let xOffset
  switch (anchor) {
    case 'start': 
      xOffset = TEXT_OFFSET
      break
    case 'end':
      xOffset = -TEXT_OFFSET
      break
    default:
      xOffset = 0
  }

  return (
    <text 
      x={x + xOffset}
      y={y + Math.sign(y)*TEXT_OFFSET}
      textAnchor={anchor}
      dominantBaseline={ y <= 0 ? 'alphabetic' : 'hanging'}
    >
      {content.toFixed(2).toLocaleString()}
    </text>
  )
}

export default TextSVG