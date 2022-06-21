import * as React from "react";
import { FlatList, View } from "react-native";
import { StyleSheet, Text, Image } from "react-native";
import Input from "../components/Input";


const Item = (props) => {
  const { title, userId } = props.item;

  return (
    <View style={styles.item}>
       <Text>{userId} - {title}</Text>
    </View>
  );
};


const Listar = () => {
  const [data, setData] = React.useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    setData(json);
  })

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "15%",
    justifyContent: "center",
  },
  item: {
    padding: "5%",
    margin:"5%",
    borderWidth: 1,
    borderColor: "thistle",
  }
});


export default Listar;
