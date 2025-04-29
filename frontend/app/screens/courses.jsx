import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Browse All Courses</Text>
      <View style={styles.courseList}>
        {[1, 2, 3, 4, 5].map((id) => (
          <TouchableOpacity key={id} style={styles.courseCard}>
            <View style={styles.coursePlaceholder} />
            <Text style={styles.courseTitle}>Course {id}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    paddingTop: 60,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 20,
    marginBottom: 10,
  },
  courseList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  courseCard: {
    width: "40%",
    marginBottom: 20,
  },
  coursePlaceholder: {
    height: 100,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  courseTitle: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
  },
});
