function ProjectsList() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Available Projects</h1>
      <p style={styles.text}>Posted projects will appear here.</p>
    </main>
  );
}

const styles = {
  page: {
    padding: "2rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    color: "#374151",
  },
};

export default ProjectsList;