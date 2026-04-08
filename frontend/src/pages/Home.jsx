function Home() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Construction opportunities, simplified.</h1>
      <p style={styles.text}>
        MjengoBid helps clients post projects and helps professionals discover work.
      </p>
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

export default Home;