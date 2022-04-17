import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../styles/MessageStyles';

  
const Discussions = ({navigation}) => {
    const Messages = [
        {
          id: '1',
          userName: 'Jenny Doe',
          userImg: require('../assets/male-13.jpg'),
          messageTime: '4 mins ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
          id: '2',
          userName: 'John Doe',
          userImg: require('../assets/female-04.jpg'),
          messageTime: '2 hours ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
          id: '3',
          userName: 'Ken William',
          userImg: require('../assets/female-05.jpg'),
          messageTime: '1 hours ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
          id: '4',
          userName: 'Selina Paul',
          userImg: require('../assets/male-14.jpg'),
          messageTime: '1 day ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
          id: '5',
          userName: 'Christy Alex',
          userImg: require('../assets/female-08.jpg'),
          messageTime: '2 days ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
      ];
      
    return (

        <Container >
          <View style={styles.searchBar}>
          <SearchBar />
          </View>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat')}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>

    )
}

const styles = StyleSheet.create({
    searchBar:{
     // flex:1,
      width: '100%',
      marginVertical:7,
      marginHorizontal:20,
      paddingHorizontal:10,
      paddingVertical:7,
      height:"7%",
    }
})
export default Discussions;