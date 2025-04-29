import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "../app/index";
import CoursesScreen from "../app/screens/courses";
import AiTutorScreen from "../app/screens/ai-tutor";
import ProgressScreen from "../app/screens/progress";
import ProfileScreen from "../app/screens/profile";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#E50914",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          height: 65,
          paddingBottom: Platform.OS === "android" ? 10 : 20,
          paddingTop: 5,
          backgroundColor: "#1a1a1a",
          borderTopWidth: 0.5,
          borderTopColor: "#333",
          elevation: 8,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Courses":
              iconName = "book-outline";
              break;
            case "AI Tutor":
              iconName = "chatbubble-ellipses-outline";
              break;
            case "Progress":
              iconName = "stats-chart-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }

          return (
            <Ionicons name={iconName} size={focused ? 24 : 22} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="AI Tutor" component={AiTutorScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
