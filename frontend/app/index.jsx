import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>EduFlix</Text>
        <TouchableOpacity>
          <View style={styles.profilePlaceholder}>
            <Text style={styles.profileInitial}>M</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerPlaceholder} />
        <Text style={styles.bannerTitle}>AI for Beginners</Text>
        <Text style={styles.bannerSubtitle}>Your journey starts here!</Text>
      </View>

      {/* Course Sections */}
      <CourseRow title="Continue Learning" />
      <CourseRow title="Popular Courses" />
      <CourseRow title="Recommended for You" />
    </ScrollView>
  );
}

function CourseRow({ title }) {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((id) => (
          <TouchableOpacity key={id} style={styles.courseCard}>
            <View style={styles.coursePlaceholder} />
            <Text style={styles.courseTitle}>Course {id}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  logo: {
    color: "#E50914",
    fontSize: 28,
    fontWeight: "bold",
  },
  profilePlaceholder: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  profileInitial: {
    color: "#fff",
    fontWeight: "bold",
  },
  banner: {
    margin: 20,
    alignItems: "center",
  },
  bannerPlaceholder: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "#333",
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  bannerSubtitle: {
    color: "#ccc",
    fontSize: 16,
  },
  rowContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },
  courseCard: {
    width: 140,
    marginHorizontal: 10,
  },
  coursePlaceholder: {
    width: 140,
    height: 90,
    borderRadius: 6,
    backgroundColor: "#444",
  },
  courseTitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
});
