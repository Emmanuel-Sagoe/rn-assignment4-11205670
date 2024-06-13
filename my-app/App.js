import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

            <View style={styles.statusBar}>
                <View style={styles.LeftSide}>
                  <Text style={styles.time}>9:41</Text>
                </View>
                <View style={styles.notch}>
                </View>
                <View style={styles.RightSide}>
                <Image source={require('./assets/Right Side.jpg')}/>
                </View>
            </View>

            <View style={styles.Group42andImage}>

              <View style={styles.Group42}>

                <View>
                  <Text style={styles.Headline1}>Eric Atsu</Text>
                </View>

                  <View>
                  <Text style={styles.Headline2}>eric@gmail.com</Text>
                  </View>

              </View>
              
              <View>
              <Image style={styles.ellipseImage} source={require('./assets/Ellipse.jpg')}/>
              </View>

            </View>

            <View style={styles.textinputandFilter}>

              <View>
              <TextInput  style={styles.textinput}  placeholder= '  Search a job or position'/>
              </View>

              <View style={styles.rectangle10}>
             <Image style={styles.filterimage} source={require('./assets/filter.5.jpg')}/>
             </View>
            
              
            </View>

            <View style={styles.featuredJobs}>
              <Text style={styles.featuredJobsHeader}>Featured Jobs</Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>

            <View style={styles.jobs} >

                 <View style={styles.GreenBG}>

                <View style={styles.Group7}>

                  <View style={styles.rectangle4}>
                  <Image style={styles.companyImage} source={require('./assets/Vector.jpg')}/>
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
                <Image style={styles.companyImage} source={require('./assets/grommet-icons_google.jpg')}/>
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

            <View style={styles.popularJobs}>
              <Text style={styles.popularJobsHeader}>Popular Jobs</Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>

            

            <View style={styles.rectangle58}>

            <View>
            <Image style={styles.burgerKingImage} source={require('./assets/burger-king-4 1.jpg')}/>
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
            <Image style={styles.beatsImage} source={require('./assets/image 8.jpg')}/>
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
            <Image style={styles.facebookImage2} source={require('./assets/Vector.jpg')}/>
            </View>

            <View>
              <Text style={styles.JobTitle}>Product Manager</Text>
              <Text style={styles.company2}>Fcaebook</Text>
            </View>

            <View>
            <Text style={styles.salary}>$86,000/y</Text>
            <Text style={styles.location2}>Florida, US</Text>
            </View>

            </View>



        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD', 
  },
  time: {
    left:15,
  },
  statusBar: {
    display:  "flex",
    flexDirection: "row",
    width:375,
    height:44,
  },
  LeftSide: {
width:54,
height:21,
top:12,
left:24,
borderRadius:24,
  },
  RightSide: {
    width:66.66,
    height:11.34,
    top:17.33,
    left:230.67,
  },
notch: {
  top: -2,
  left:78,
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
top:-8,
},
Group42andImage: {
   display: 'flex',
  flexDirection: 'row',
  top: 1,
},
ellipseImage: {
width:54,
height:54,
left:35,
top:6,
},
textinput: {
  height:48,
  top:30,
  left:24,
  backgroundColor:'#F2F2F3',
  width:254,
  borderRadius:12,
  paddingLeft:50,
},
filterimage: {
  width:26,
  height:26,
  Color:'#F2F2F3',
  left:11.5,
  top:11,
},
rectangle10: {
height:48,
width:48,
backgroundColor:'#F2F2F3',
top:30,
left:35,
borderRadius:12,
},
textinputandFilter: {
  display: 'flex',
  flexDirection: 'row',
},
featuredJobs: {
  top:50,
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
},
seeAll: {
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
  top:70,
  left:24,
  backgroundColor:'#5386E4',
  borderRadius:24,
  paddingTop:24,
  paddingLeft:24,
  marginRight:10,
},
  GreenBG2: {
    width:260,
    height:186,
    top:70,
    left:24,
    backgroundColor:'#0D0D26',
    borderRadius:24,
    paddingTop:24,
    paddingLeft:24,
    marginRight:10,
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
height:21,
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
  top:90,
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
rectangle58: {
  top:110,
  left:24,
  backgroundColor:'#FFFFFF',
  borderRadius:20,
  marginBottom:15,
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
});
