import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';

export default function Note() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [checked, setChecked] = useState(false);//theo doi trang thai checkbox

    // Định nghĩa state mới để lưu trữ màu của item.priority
    const [priorityColor, setPriorityColor] = useState({});

    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        if (!userData) {
            getUserData();
        }
    }, [userData]);

    //lay du lieu user từ asyncStorage sau khi login thanh cong
    const getUserData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userData');
            if (jsonValue !== null) {
                const data = JSON.parse(jsonValue);
                setUserData(data);
                //initializePriorityColors(data.note);
                initializeCheckedItems(data.note);
            }
        } catch (error) {
            console.error('Loi khi lay du lieu nguoi dung: ', error);
        } finally {
            setLoading(false);
        }
    };
    //nếu chưa lấy xong dữ liệu thì hiển thị màn hình loading
    if (loading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>

        )
    }
    //màu mặc định cuar priority là red nếu priority là high và yellow nếu priority là low
    const initializePriorityColors = (notes) => {
        const colors = {};
        notes.forEach((note) => {
            colors[note.task_id] = note.priority === 'High' ? 'rgba(255, 0, 0, 0.7)' : 'yellowrgba(255, 215, 0, 0.5)';
        });
        setPriorityColor(colors);
    };

    // Cập nhật màu sắc của priority theo item.task_id
    const updatePriorityColor = (taskId, priority) => {
        const colors = { ...priorityColor };
        colors[taskId] = priority === 'High' ? 'rgba(255, 0, 0, 0.7)' : 'rgba(255, 215, 0, 0.5)';
        setPriorityColor(colors);
    };

    // Cập nhật màu của priority khi nhấn vào checkbox
    const handleCheckboxPress = (taskId, priority) => {
        const updatedCheckedItems = { ...checkedItems };
        updatedCheckedItems[taskId] = !updatedCheckedItems[taskId]; // Đảo ngược trạng thái của item khi checkbox được nhấn
        setCheckedItems(updatedCheckedItems);

        updatePriorityColor(taskId, priority);
    };

    //khởi tạo mảng checkedItems để lưu trữ trạng thái của checkbox
    const initializeCheckedItems = (notes) => {
        const items = {};
        notes.forEach((note) => {
            items[note.task_id] = false; // Khởi tạo mỗi item với trạng thái unchecked ban đầu
        });
        setCheckedItems(items);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-left' size={30} color={'rgba(255,255,255,1)'} />
                <Text style={styles.txtWellcome}>
                    Welcome {userData.lastname}
                </Text>
                <Icon name='bars' size={30} color={'rgba(255,255,255,1)'} />
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder='Search your task...'
                    placeholderTextColor='rgba(0,0,0,0.5)'
                />
                <TouchableOpacity
                    style={styles.btnSerach}>
                    <Icon name='search' size={30} color={'#fff'} />
                </TouchableOpacity>
            </View>
            <View style={styles.createTaskContainer}>
                <TouchableOpacity style={styles.btnAddTask}>
                    <Text style={styles.btnText}>Create Task</Text>
                    <Icon style={styles.btnIcon} name='plus' size={30} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFilterTask}>
                    <Text style={styles.btnText}>Filter Task</Text>
                    <Icon style={styles.btnIcon} name='filter' size={30} color={'#fff'} />
                </TouchableOpacity>
            </View>

            <View style={styles.listTask}>
                <FlatList
                    data={userData.note}
                    keyExtractor={item => item.task_id.toString()}
                    extraData={priorityColor} // Đảm bảo cập nhật khi priorityColors thay đổi
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.taskContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                                <View
                                    style={[
                                        styles.priority,
                                        {
                                            backgroundColor:
                                                checkedItems[item.task_id] && priorityColor[item.task_id]
                                                    ? 'rgba(0, 215, 0, 0.5)'
                                                    : priorityColor[item.task_id] || (item.priority === 'High' ? 'rgba(255, 0, 0, 0.7)' : 'rgba(255, 215, 0, 0.5)'),
                                        },
                                    ]}>
                                    <Checkbox
                                        style={styles.checkbox}
                                        status={checkedItems[item.task_id] ? 'checked' : 'unchecked'}
                                        color={'blue'}
                                        size={40}
                                        onPress={() => {
                                            handleCheckboxPress(item.task_id, item.priority);
                                        }}
                                    />
                                </View>

                                <View style={styles.taskContent}>
                                    <Text style={styles.txtTaskTitle}>Title:
                                        <Text style={styles.customText}>{item.taskTitle}</Text>
                                    </Text>
                                    <Text style={styles.txtTaskDate}>Due date:
                                        <Text style={styles.customText}>{item.date}</Text>
                                    </Text>
                                    <Text style={styles.txtTaskStatus}>Status:
                                        <Text style={styles.customText}>{item.status}</Text>
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.btnDeleteTask}>
                                    <Icon style={styles.crash} name='trash' size={30} color={'rgba(0,0,0,0.5)'} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                    numColumns={1}
                />
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 50,
        width: '100%',
        //position: 'fixed',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    txtWellcome: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchContainer: {
        width: '100%',
        height: 60,
        marginTop: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 2
    },
    searchBar: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
    },
    btnSerach: {
        width: '12%',
        height: '50',
        padding: 5,
        backgroundColor: '#fff000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createTaskContainer: {
        flexDirection: 'row',
        width: '95%',
        height: 50,
        marginTop: 10,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
    },
    btnAddTask: {
        flexDirection: 'row',
        width: '45%',
        height: '100%',
        backgroundColor: '#00BFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    btnFilterTask: {
        flexDirection: 'row',
        width: '45%',
        height: '100%',
        backgroundColor: '#00BFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    btnText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    btnIcon: {
        marginLeft: 10,
    },

    listTask: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        padding: 5,
    },
    taskContainer: {
        width: '90%',
        height: 100,
        backgroundColor: 'rgba(248,248,255,1)',
        borderRadius: 10,
        marginTop: 15,
        justifyContent: 'center', // Canh giữa theo chiều dọc
        alignItems: 'flex-start', // Canh theo chiều ngang bên trái
        alignSelf: 'center',
        position: 'relative',
    },
    taskContent: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        alignSelf: 'center',
        padding: 5,
        left: 5,
    },
    priority: {
        backgroundColor: 'rgba(248,248,255,1)',
        borderRightWidth: 2,
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        boxShadow: '2px 2px 10px #aaaaaa',
    },
    checkbox: {
        position: 'absolute',
        top: 50,
        left: 100,
    },
    txtTaskTitle: {
        fontSize: 15,
        fontFamily: 'Arial',
    },
    txtTaskDate: {
        fontSize: 15,
        fontFamily: 'Arial',
    },
    txtTaskStatus: {
        fontSize: 15,
        fontFamily: 'Arial',
    },
    customText: {
        left: 3,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    btnDeleteTask: {
        height: '100%',
        justifyContent: 'center',
        left: 40,
    },
});