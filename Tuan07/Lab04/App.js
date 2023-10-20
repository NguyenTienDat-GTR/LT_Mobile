import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const data = [
    {
      id: 'sp1',
      title: 'Ca nấu lẩu, nấu mì mini',
      shop: 'Devang',
      img: require('../Lab04/assets/ca_nau_lau.png'),
    },
    {
      id: 'sp2',
      title: "TKG KHÔ GÀ BƠ TỎI",
      shop: "LTD Food",
      img: require('../Lab04/assets/ga_bo_toi.png'),
    },
    {
      id: 'sp3',
      title: "Xe cần cẩu đa năng Shou",
      shop: "Thế giới đồ chơi",
      img: require('../Lab04/assets/xe_can_cau.png'),
    },
    {
      id: 'sp4',
      title: "Đồ chơi dạng mô hình sudo",
      shop: "Thế giới đồ chơi",
      img: require('../Lab04/assets/do_choi_dang_mo_hinh.png'),
    },
    {
      id: 'sp5',
      title: "Lãnh đạo giản đơn",
      shop: "LÃNH ĐẠO",
      img: require('../Lab04/assets/lanh_dao_gian_don.png'),
    },
    {
      id: 'sp6',
      title: "Hiểu lòng con trẻ",
      shop: "Sống Minh Long Book",
      img: require('../Lab04/assets/hieu_long_con_tre.png'),
    },
  ];

  return (
    <View Style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgReturn_header} source={require('../Lab04/assets/return.png')} />
        <Text style={styles.txtChat}>Chat</Text>
        <Image style={styles.imgCart} source={require('../Lab04/assets/cart_check.png')} />
      </View>
      <View style={styles.title_header}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại <br />chat với shop!</Text>
      </View>
      <ScrollView style={styles.ScrollView}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image style={styles.img} source={item.img} />
              <View style={styles.infoSp}>
                <Text style={styles.titleSp} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                <Text style={styles.shop}>Shop {item.shop}</Text>
              </View>
              <TouchableOpacity style={styles.buttonChat}>
                <Text style={styles.buttonChatText}>CHAT</Text>
              </TouchableOpacity>
            </View>
          )}
          numColumns={1}
        />
      </ScrollView>
      <View style={styles.bottom}>
        <Image style={styles.imgMenu} source={require('../Lab04/assets/menu.png')} />
        <Image style={styles.imgHome} source={require('../Lab04/assets/home.png')} />
        <Image style={styles.imgReturn_bottom} source={require('../Lab04/assets/return_1.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottom: {
    position: 'fixed',
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '93%', // Đặt vị trí ở phía dưới cùng của màn hình
    width: '100%',
    zIndex: 1, // Đặt vị trí ở trên ScrollView
  },
  scrollView: {
    flex: 1, // Để ScrollView lấp đầy phần còn lại của màn hình
  },
  imgReturn_header: {
    width: 30,
    height: 30,
    margin: 10,
  },
  imgReturn_bottom: {
    width: 30,
    height: 30,
    margin: 10,
  },
  imgHome: {
    width: 30,
    height: 30,
    margin: 10,
  },
  txtChat: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 5,
  },
  imgCart: {
    width: 30,
    height: 30,
    margin: 10,
    marginRight: 20,
  },
  imgMenu: {
    width: 30,
    height: 30,
    margin: 10,
  },
  title_header: {
    height: 50,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C8',
    padding: 5,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  titleSp: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    flex: 1,
  },
  infoSp: {
    flexDirection: 'column',
    flex: 1,
  },
  shop: {
    fontSize: 14,
  },
  img: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  buttonChat: {
    backgroundColor: 'red',
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonChatText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 20,
  },
});
