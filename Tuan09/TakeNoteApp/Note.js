import {
    StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator, Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';
import DatePickerComponent from './controls/datePicker';
import { RadioButton } from 'react-native-paper';


export default function Note() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [checked, setChecked] = useState(false);//theo doi trang thai checkbox
    const [isModalVisible, setModalVisible] = useState(false);//theo doi trang thai modal

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [dueDate, setDueDate] = useState('');


    // Định nghĩa state mới để lưu trữ giá trị của priority
    const [priority, setPriority] = useState('High');
    // Định nghĩa state mới để lưu trữ màu của item.priority
    const [priorityColor, setPriorityColor] = useState({});

    const [checkedItems, setCheckedItems] = useState({});

    useEffect(() => {
        if (!userData) {
            getUserData();
        }
    }, [userData]);

    // Hàm cập nhật trạng thái checkbox và màu sắc ban đầu từ dữ liệu API
    const initializeCheckedItemsAndColors = (notes) => {
        const initialCheckedItems = {};
        const initialPriorityColor = {};

        notes.forEach((note) => {
            initialCheckedItems[note.task_id] = note.status === 'true'; // True nếu status là 'true', ngược lại là false

            if (note.status === 'true') {
                initialCheckedItems[note.task_id] = true;// Checkbox sẽ là checked nếu status là true
                initialPriorityColor[note.task_id] = 'rgba(0, 215, 0, 0.5)'; // Màu xanh lá cho trạng thái checked
            } else {
                initialCheckedItems[note.task_id] = false; // Checkbox sẽ là unchecked nếu status là false
                initialPriorityColor[note.task_id] = note.priority === 'High' ? 'rgba(255, 0, 0, 0.7)' : 'rgba(255, 215, 0, 0.5)'; // Màu đỏ hoặc vàng tương ứng với high và low
            }
        });

        setCheckedItems(initialCheckedItems);
        setPriorityColor(initialPriorityColor);
    };

    //lay du lieu user từ asyncStorage sau khi login thanh cong
    const getUserData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userData');
            if (jsonValue !== null) {
                const data = JSON.parse(jsonValue);
                setUserData(data);
                initializeCheckedItemsAndColors(data.note);
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

    // Cập nhật màu sắc của priority theo item.task_id
    const updatePriorityColor = (taskId, priority) => {
        const colors = { ...priorityColor };
        colors[taskId] = priority === 'High' ? 'rgba(255, 0, 0, 0.7)' : 'rgba(255, 215, 0, 0.5)';
        setPriorityColor(colors);
    };


    // Hàm cập nhật trạng thái checkbox, màu sắc và trạng thái status tương ứng khi nhấn checkbox
    const handleCheckboxPress = async (taskId, priority, currentStatus) => {
        const updatedCheckedItems = { ...checkedItems };
        updatedCheckedItems[taskId] = !currentStatus;
        setCheckedItems(updatedCheckedItems);

        updatePriorityColor(taskId, priority);

        const updatedUserData = { ...userData };
        const updatedNote = updatedUserData.note.map((item) => {
            if (item.task_id === taskId) {
                item.status = !currentStatus ? 'true' : 'false';
            }
            return item;
        });
        updatedUserData.note = updatedNote;
        setUserData(updatedUserData);

        // Gửi yêu cầu cập nhật status lên API
        try {
            const response = await fetch(`https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp/${userData.id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUserData),
            });

            if (!response.ok) {
                throw new Error('Error connecting to the network');
            } else {
                const responseData = await response.json();
                //console.log('Updated data:', responseData);
            }
        } catch (error) {
            console.error('Error updating data: ', error);
        }
    };
    // //xử lí btn Create Task

    // const handleCreateTask = () => {
    //     console.log('isModalVisible before set:', isModalVisible);
    //     setModalVisible(!isModalVisible); // Chuyển đổi giá trị ngược lại
    //     console.log('isModalVisible after set:', isModalVisible);
    // }

    // Hàm này sẽ được gọi từ DatePickerComponent để cập nhật ngày được chọn
    const handleDueDateChange = date => {
        setDueDate(date);
        setDatePickerVisible(false); // Ẩn DatePickerComponent sau khi chọn ngày
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    }

    return (
        <View style={[styles.container, { opacity: isModalVisible ? 0.4 : 1 }]}>
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
                <TouchableOpacity style={styles.btnAddTask} onPress={() => setModalVisible(true)} >
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
                                            handleCheckboxPress(item.task_id, item.priority, checkedItems[item.task_id]);
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
                                        <Text style={styles.customText}>
                                            {checkedItems[item.task_id] ? 'Complete' : item.status === 'true' ? 'Complete' : 'Incomplete'}
                                        </Text>
                                    </Text>
                                </View>
                                <View style={styles.containerEditAndDeleteTask}>
                                    <TouchableOpacity style={styles.btnEditTask}>
                                        <Icon style={styles.crash} name='edit' size={30} color={'rgba(0,0,0,0.5)'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnDeleteTask}>
                                        <Icon style={styles.crash} name='trash' size={30} color={'rgba(0,0,0,0.5)'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    numColumns={1}
                />
            </View>
            <Modal
                visible={isModalVisible}
                animationType='slide'
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainerParent}>
                    <View style={styles.modalContainer}>
                        <View style={styles.titleModalCreateTaskContainer}>
                            <Text style={styles.txtTitleModalCreateTask}>Create Task</Text>
                        </View>
                        <View style={styles.inputCreateTaskContainer}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Task Title:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter task title...'
                                    placeholderTextColor='rgba(0,0,0,0.5)' />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Due Date:</Text>
                                <View style={styles.chooseDateContainer}>
                                    <Text style={[styles.input, { padding: 0, paddingLeft: 10 }]} >Selected Date</Text>
                                    <TouchableOpacity style={styles.btnChooseDate} onPress={() => setDatePickerVisible(true)}>
                                        <Icon name="calendar" size={30} color={'rgba(0,0,0,0.5)'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={[styles.label, { width: '40%' }]}>Task Priority:</Text>
                                <View style={styles.radioContainer}>
                                    <RadioButton.Group onValueChange={handlePriorityChange} value={priority}>
                                        <View style={styles.radioOption}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', gap: 20 }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <RadioButton value="High" />
                                                    <View>
                                                        <Text>Hight</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <RadioButton value="Low" />
                                                    <View>
                                                        <Text>Low</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </RadioButton.Group>
                                </View>
                            </View>
                            <View style={[styles.inputContainer, { flexDirection: 'column', height: 160 }]}>
                                <Text style={[styles.label, { width: '40%' }]}>Task Content:</Text>
                                <TextInput
                                    style={[styles.input, { height: 150, width: '95%' }]}
                                    placeholder='Enter task content...'
                                    placeholderTextColor='rgba(0,0,0,0.5)'
                                    multiline={true}
                                    numberOfLines={4}
                                />
                            </View>
                        </View>
                        <View style={styles.buttonModalContainer}>
                            <TouchableOpacity style={styles.buttonSaveModal} onPress={() => setModalVisible(false)}>
                                <Text style={styles.txtBtnModal}>Create</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonSaveModal} onPress={() => setModalVisible(false)}>
                                <Text style={styles.txtBtnModal}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal >
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
        boxShadow: '2px 2px 10px #aaaaaa',
        borderRadius: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        position: 'relative',
    },
    taskContent: {
        width: 200,
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
    containerEditAndDeleteTask: {
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        right: -100,
    },
    modalContainerParent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        height: '70%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 10,
        boxShadow: '2px 2px 10px #aaaaaa',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleModalCreateTaskContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.5)',
        top: 5,
    },
    txtTitleModalCreateTask: {
        width: '100%',
        height: '10%',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fonFamily: 'Roboto',
    },
    inputCreateTaskContainer: {
        width: '100%',
        height: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        top: 20,
    },
    inputContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 5,
        position: 'relative',
    },
    label: {
        width: '30%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
    input: {
        width: '70%',
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
    },
    chooseDateContainer: {
        width: '70%',
        height: 30,
        backgroundColor: '#fff',
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    datePickerContainer: {
        position: 'absolute',
        top: '50%'/* Điều chỉnh vị trí theo yếu cầu của bạn */,
        left: '50%'/* Điều chỉnh vị trí theo yếu cầu của bạn */,
        zIndex: 1, // Đảm bảo DatePickerComponent hiển thị trên các phần tử khác
        backgroundColor: '#fff', // Tuỳ chỉnh màu sắc hoặc bố cục cho DatePickerComponent container
        borderRadius: 10,
        // Các thuộc tính khác tùy chỉnh theo yêu cầu của bạn
    },
    btnChooseDate: {
        right: 20,
    },
    radioContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: -5,
    },
    radioOption: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonModalContainer: {
        width: '95%',
        height: '60',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        marginTop: -50,
    },
    buttonSaveModal: {
        width: '40%',
        height: '100%',
        backgroundColor: '#00BFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: -20,
    },
    txtBtnModal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
    },
});