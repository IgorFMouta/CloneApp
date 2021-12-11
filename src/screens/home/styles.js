import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    toHome: {
      width: 24,
      height: 24,
      marginLeft: 30,
      marginTop: 30
    },
    otherButtons: {
      width: 24,
      height: 24,
      marginLeft: 65,
      marginTop: 30
    },
    geral: { 
      display: "flex", 
      flexDirection: "row", 
      alignItems: "baseline" 
    },
    text01: { 
      color: "#696969",
      fontSize: 12,
      marginLeft: 30,
      marginTop: 40 },
  
    text02: { 
      color: "black", 
      fontSize: 19, 
      marginLeft: 30, 
      marginTop: 15, 
      fontWeight: "bold" 
    },
    text03: { 
      color: "black", 
      fontSize: 16, 
      marginLeft: 3, 
      marginBottom: 20, 
      fontWeight: "bold" 
    },
    text04: { 
      color: "black", 
      fontSize: 16, 
      marginLeft: 3, 
      marginTop: 20, 
      fontWeight: "bold" 
    },
    text05: { 
      color: "#696969", 
      fontSize: 16, 
      marginTop: 20, 
      fontWeight: "bold", 
      marginRight: 30 
    },
    vPorcent: { 
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center"
    },
    vPorcent02: { 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "baseline", 
    width: 200 
    },
    vText: { 
      position: "absolute", 
      bottom: 60, 
      left: 0, 
      paddingLeft: 30, 
      paddingRight: 50 
    },
    vText02: { 
      display: "flex", 
      flexDirection: "row", 
      alignItems: "baseline", 
      borderBottomWidth: 1, 
      borderBottomColor: "#C0C0C0" 
    },
    text07:{ 
      color: "#696969", 
      fontSize: 16, 
      fontWeight: "bold", 
      marginRight: 30 
    },
    vText03:{ 
      display: "flex", 
      flexDirection: "row", 
      alignItems: "baseline", 
    },
    porcent03:{ 
      width: "45%", 
      height: "25%", 
      marginLeft: 30, 
      marginTop: 5 
    },
    grafico: { 
      width: 100, 
      height: 200, 
      marginLeft: 65, 
      marginTop: 10 
    }
  });
  export default styles;