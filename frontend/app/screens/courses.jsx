import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function CoursesScreen() {
  const [query, setQuery] = useState("");

  const handleViewAllTrendingFree = () => {
    console.log("Navigate to: All Trending Free Courses");
  };

  const handleViewAllTrendingPaid = () => {
    console.log("Navigate to: All Trending Paid Courses");
  };

  const handleViewAllRecommended = () => {
    console.log("Navigate to: All Recommended Courses");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for courses..."
          placeholderTextColor="#888"
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {/* Trending Courses */}
      <CourseSection
        title="🔥 Trending (Free)"
        courses={["AI Basics", "Intro to Python", "Web Dev Starter"]}
        onViewAll={handleViewAllTrendingFree}
      />
      <CourseSection
        title="💰 Trending (Paid)"
        courses={[
          "ML with Projects",
          "Advanced React Native",
          "UI/UX Bootcamp",
        ]}
        onViewAll={handleViewAllTrendingPaid}
      />

      {/* Recommended Courses */}
      <CourseSection
        title="🎯 Recommended for You"
        courses={[
          "Ethical Hacking",
          "Chatbot Development",
          "Career Skills 101",
        ]}
        onViewAll={handleViewAllRecommended}
      />
    </ScrollView>
  );
}

function CourseSection({ title, courses, onViewAll }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {courses.map((course, index) => (
          <TouchableOpacity key={index} style={styles.courseCard}>
            <View style={styles.courseBox} />
            <Text style={styles.courseTitle}>{course}</Text>
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
    paddingTop: 60,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: "#fff",
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 20,
    marginBottom: 10,
  },
  courseCard: {
    width: 140,
    marginHorizontal: 10,
    alignItems: "center",
  },
  courseBox: {
    width: 140,
    height: 90,
    backgroundColor: "#333",
    borderRadius: 8,
    marginBottom: 6,
  },
  courseTitle: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  viewAllText: {
    color: "#E50914",
    fontSize: 14,
    fontWeight: "500",
  },
});
