import { TextInput } from "react-native";


function Input ({ onChangeText, style, value }) {
  return (
    <TextInput
      placeholder="Já podes usar o que quiseres"
      style={{
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        justifyContent: "space-between",
        marginBottom: 10,
      }}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;