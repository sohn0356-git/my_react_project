export default moveScreen = (props, dest, payload) => {
  props.navigation.navigate(dest, payload);
}