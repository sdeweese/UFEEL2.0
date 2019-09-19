       APPS = [
       {
        title: "Headspace",
        img: "./app-icons/headspace.jpg",
        link: "https://www.headspace.com/headspace-meditation-app",
        description: "Headspace is your guide to health and happiness. It’s the simple way to let go of stress and get a better night’s rest. Learn to relax with guided meditations and mindfulness techniques that bring calm, wellness and balance to your life in just a few minutes a day.",
       }

       ]

       function Item({ id, title, img, link, description}) {
  return ( 
          <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Meditation Apps</Text>
          </View>
          <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL(link)}>
                <Image source={require(img)} style={styles.img} />
              </TouchableOpacity>
              <Text style= {styles.text1}>title</Text>
              <Text style= {styles.text2}>description</View>
               );
}


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
            data={this.state.data},
            renderItem{({item}) => (
              <Item
                title={item.title},
                img={item.img},
                link={item.link},
                description={item.description},
                containerStyle={{borderBottomWidth: 0}}/>
              )}
            </Item>
          />
         </SafeAreaView>
          );
}