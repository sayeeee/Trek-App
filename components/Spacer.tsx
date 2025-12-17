import { View, DimensionValue } from 'react-native'

// 1. Define the types for your props
type SpacerProps = {
  width?: DimensionValue;  // Allows numbers, percentages, "auto"
  height?: DimensionValue;
}

// 2. Apply the type to your component
const Spacer = ({ width = "100%", height = 40 }: SpacerProps) => {
  return (
    <View style={{ width, height }} />
  )
}

export default Spacer