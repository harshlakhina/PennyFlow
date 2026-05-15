import { Text, TextProps, TextStyle } from "react-native";

import { useTheme } from "../../hooks";

interface Props extends TextProps {
  children: React.ReactNode;
  size?: number;
  weight?: TextStyle["fontWeight"];
  color?: string;
}

export default function Typography({
  children,
  size = 16,
  weight = "400",
  color,
  style,
  ...props
}: Props) {
  const theme = useTheme();

  return (
    <Text
      style={[
        {
          fontSize: size,
          fontWeight: weight,
          color: color || theme.colors.text,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
