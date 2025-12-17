import { Text, TextProps, StyleSheet } from 'react-native'


type PlainTextProps = TextProps & {
  title?: boolean;
};


const PlainText = ({ style, title = false, ...props }: PlainTextProps) => {
  return (
    <Text 
      style={[{ color: '#f5f2f2'}, style]}
      {...props}
    />
  )
}

export default PlainText