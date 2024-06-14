import { Image, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function Homepage({ route }) {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Group42andImage}>
          <View style={styles.Group42}>
            <View>
              <Text style={styles.Headline1}>{name}</Text>
            </View>
            <View>
              <Text style={styles.Headline2}>{email}</Text>
            </View>
          </View>
          <View>
            <Image style={styles.ellipseImage} source={require('./assets/Ellipse.jpg')} />
            <Image style={styles.redEllipse} source={require('./assets/Ellipse 767.jpg')} />
            <Image style={styles.Ellipse798} source={require('./assets/Ellipse 798.jpg')} />
          </View>
        </View>
        <View style={styles.textinputandFilter}>
        <Image style={styles.searchIcon} source={require('./assets/Search.jpg')} />
          <View>
            <TextInput style={styles.textinput} placeholder='  Search a job or position' />
          </View>
          <View style={styles.rectangle10}>
            <Image style={styles.filterimage} source={require('./assets/filter.5.jpg')} />
          </View>
        </View>
        <View style={styles.featuredJobs}>
          <Text style={styles.featuredJobsHeader}>Featured Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView style={styles.horizontalscollview} horizontal={true}>
          <View style={styles.jobs}>
            <View style={styles.GreenBG}>
              <View style={styles.Group7}>
                <View style={styles.rectangle4}>
                  <Image style={styles.companyImage} source={require('./assets/Vector.jpg')} />
                </View>
                <View>
                  <Text style={styles.jobname}>Software Engineer</Text>
                  <Text style={styles.company}>Facebook</Text>
                </View>
              </View>
              <View style={styles.Group6}>
                <Text style={styles.Money}>$180,00</Text>
                <Text style={styles.location}>Accra, Ghana</Text>
              </View>
            </View>
            <View style={styles.GreenBG2}>
              <View style={styles.Group7}>
                <View style={styles.rectangle4}>
                  <Image style={styles.companyImage} source={require('./assets/grommet-icons_google.jpg')} />
                </View>
                <View>
                  <Text style={styles.jobname}>Software Engineer</Text>
                  <Text style={styles.company}>Google</Text>
                </View>
              </View>
              <View style={styles.Group6}>
                <Text style={styles.Money}>$160,00</Text>
                <Text style={styles.location}>Accra, Ghana</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.popularJobs}>
          <Text style={styles.popularJobsHeader}>Popular Jobs</Text>
          <Text style={styles.seeAll2}>See all</Text>
        </View>
        <View style={styles.rectangle58}>
          <View>
            <Image style={styles.burgerKingImage} source={require('./assets/burger-king-4 1.jpg')} />
          </View>
          <View>
            <Text style={styles.JobTitle}>Jr Executive</Text>
            <Text style={styles.company2}>Burger King</Text>
          </View>
          <View>
            <Text style={styles.salary}>$96,000/y</Text>
            <Text style={styles.location2}>Los Angeles, US</Text>
          </View>
        </View>
        <View style={styles.rectangle58}>
          <View>
            <Image style={styles.beatsImage} source={require('./assets/image 8.jpg')} />
          </View>
          <View>
            <Text style={styles.JobTitle}>Product Manager</Text>
            <Text style={styles.company2}>Beats</Text>
          </View>
          <View>
            <Text style={styles.salary}>$84,000/y</Text>
            <Text style={styles.location2}>Florida, US</Text>
          </View>
        </View>
        <View style={styles.rectangle58}>
          <View>
            <Image style={styles.facebookImage2} source={require('./assets/Vector.jpg')} />
          </View>
          <View>
            <Text style={styles.JobTitle}>Product Manager</Text>
            <Text style={styles.company2}>Facebook</Text>
          </View>
          <View>
            <Text style={styles.salary}>$85,000/y</Text>
            <Text style={styles.location2}>Florida, US</Text>
          </View>
        </View>
        <View style={styles.rectangle58}>
          <View>
            <Image style={styles.googleImage2} source={require('./assets/grommet-icons_google.jpg')} />
          </View>
          <View>
            <Text style={styles.JobTitle}>Sales Executive</Text>
            <Text style={styles.company2}>Google</Text>
          </View>
          <View>
            <Text style={styles.salary}>$100,000/y</Text>
            <Text style={styles.location2}>Georgia, US</Text>
          </View>
        </View>
        <View style={styles.rectangle58}>
          <View>
            <Image style={styles.facebookImage2} source={require('./assets/Vector.jpg')} />
          </View>
          <View>
            <Text style={styles.JobTitle}>Product Manager</Text>
            <Text style={styles.company2}>Facebook</Text>
          </View>
          <View>
            <Text style={styles.salary}>$85,000/y</Text>
            <Text style={styles.location2}>Florida, US</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD', 
  },

Group42: {
  width: 254,
  height: 55,
  left:24,
},
Headline1: {
fontSize:24,
color:'#0D0D26',
marginBottom: 0,
},
Headline2: {
fontSize:20,
color:'#95969D',
top:-4,
},
Group42andImage: {
   display: 'flex',
  flexDirection: 'row',
  top: 40,
},
ellipseImage: {
width:54,
height:54,
left:35,
top:6,
},
redEllipse: {
top:-41,
left:75,
height:8,
width:8,
zIndex:100,
},
Ellipse798: {
  top:-52,
  left:72,
  zIndex:90,
  width:14,
  height:14,
  borderRadius:50,
  },
textinput: {
  height:48,
  top:30,
  backgroundColor:'#F2F2F3',
  width:254,
  borderRadius:12,
  paddingLeft:50,
},
searchIcon:{
top:45,
left:50,
zIndex:1,
},
filterimage: {
  width:26,
  height:26,
  backgroundColor:'#F2F2F3',
  left:11.5,
  top:11,
  backgroundColor:'#F2F2F3',
},
rectangle10: {
height:48,
width:48,
backgroundColor:'#F2F2F3',
top:30,
left:20,
borderRadius:12,
},
textinputandFilter: {
  display: 'flex',
  flexDirection: 'row',
  top:20,
},
featuredJobs: {
  top:10,
  left:24,
  display: 'flex',
  flexDirection: 'row',
},
featuredJobsHeader: {
  width:114,
  height:21,
  fontSize:16,
  color:'#0D0D26',
  lineHeight:20.8,
  top:60,
},
seeAll: {
top:60,
color:'#95969D',
fontSize:14,
left:154,
width:42,
height:17,
},
jobs: {
  display: 'flex',
  flexDirection: 'row',
},
GreenBG: {
  width:260,
  height:186,
  top:65,
  left:24,
  backgroundColor:'#5386E4',
  borderRadius:24,
  paddingTop:24,
  paddingLeft:24,
  marginRight:10,
  marginTop:-50
},
  GreenBG2: {
    width:260,
    height:186,
    top:65,
    left:24,
    backgroundColor:'#0D0D26',
    borderRadius:24,
    paddingTop:24,
    paddingLeft:24,
    marginRight:10,
    marginTop:-50
},
Group7: {
  width:207,
  height:47,
   display: 'flex',
  flexDirection: 'row',
},
rectangle4: {
  width:46,
  height:46,
  backgroundColor:'#FFFFFF',
  borderRadius:12,
  marginRight:15,
},
companyImage: {
width:22,
height:23.57,
top:11,
left:12,
},
jobname: {
width:145,
height:21,
fontSize:16,
lineHeight:20.8,
color:'#FFFFFF',
},
company: {
width:68,
height:25,
opacity:75,
fontSize:14,
lineHeight:30,
color:'#FFFFFF',
},
Group6: {
top:70,
display: 'flex',
flexDirection: 'row',
height:26,
width:236,
},
Money: {
  width:56,
  height:24,
  fontSize:15,
  lineHeight:24,
color:'#FFFFFF',
},
location: {
  width:102,
  height:24,
  fontSize:15,
  lineHeight:24,
color:'#FFFFFF',
left:75,
},
popularJobs: {
  top:60,
  left:24,
  display: 'flex',
  flexDirection: 'row',
},
popularJobsHeader: {
  width:114,
  height:21,
  fontSize:16,
  color:'#0D0D26',
  lineHeight:20.8,
},
seeAll2:{
color:'#95969D',
fontSize:14,
left:154,
width:42,
height:17,
},
rectangle58: {
  top:80,
  left:24,
  backgroundColor:'#FFFFFF',
  borderRadius:20,
  marginBottom:10,
  width:307,
  height:74,
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-between',
  alignItems:'center'
},
burgerKingImage: {
  width:41.26,
  height:43,
  left:15,
},
beatsImage: {
  width:43,
  height:43,
  left:15,
},
beatsImage: {
  width:43,
  height:43,
  left:15,
},
facebookImage2: {
  width:40,
  height:39.76,
  left:15,
},
googleImage2: {
  width:40,
  height:40,
  left:15,
},
JobTitle: {
  width:120,
  height:18,
  fontSize:14,
  lineHeight:18.2,
  color:'#0D0D26'
},
company2: {
  width:74,
  height:21,
  fontSize:13,
  lineHeight:20.8,
  color:'#95969D'
},
salary: {
  width:62,
  height:19,
  fontSize:12,
  color:'#0D0D26',
  lineHeight:19.2,
  textAlign:'right'
},
location2: {
  width:100,
  height:21,
  fontSize:13,
  lineHeight:20.8,
  color:'#95969D',
},
horizontalscollview: {
  height:215,
  marginTop:70,
  marginBottom:-60.5,
},
});
