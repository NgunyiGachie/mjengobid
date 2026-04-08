function PostProject() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Post a Project</h1>
      <p style={styles.text}>Your project form will go here next.</p>
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

export default PostProject;