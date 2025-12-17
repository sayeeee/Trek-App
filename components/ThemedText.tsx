import { Text, TextProps, StyleSheet } from 'react-native'

// 1. Define a type that combines standard Text props with your custom props
// TextProps includes 'style', 'onPress', 'numberOfLines', etc.
type ThemedTextProps = TextProps & {
  title?: boolean;
};

// 2. Apply the type to the component props
const ThemedText = ({ style, title = false, ...props }: ThemedTextProps) => {
  
  return (
    <Text 
      // 3. Now TypeScript knows 'style' is a valid Text style
      style={[{ color: '#8b16f7'}, style]}
      {...props}
    />
  )
}

export default ThemedText