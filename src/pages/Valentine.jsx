import React from "react";

const ValentineForAnbarasi = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>Happy Valentine's Day 💖</h1>

        <h2 style={styles.name}>Dear Anbarasi,</h2>

        <p style={styles.message}>
          From the moment you came into my life, everything became brighter.
          Your smile is my favorite sunrise, and your love is my greatest blessing.
        </p>

        <p style={styles.quote}>
          "You are my today and all of my tomorrows." 💕
        </p>

        <p style={styles.quote}>
          "In your arms, I found my forever."
        </p>

        <p style={styles.signature}>
          Forever Yours,<br />
          <strong>Praburam ❤️</strong>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  card: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "600px",
    textAlign: "center",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
    animation: "fadeIn 2s ease-in-out",
  },
  title: {
    color: "#e91e63",
    fontSize: "36px",
    marginBottom: "20px",
  },
  name: {
    fontSize: "28px",
    marginBottom: "15px",
    color: "#333",
  },
  message: {
    fontSize: "18px",
    marginBottom: "20px",
    lineHeight: "1.6",
    color: "#444",
  },
  quote: {
    fontStyle: "italic",
    color: "#d81b60",
    marginBottom: "10px",
  },
  signature: {
    marginTop: "25px",
    fontSize: "20px",
    color: "#000",
  },
};

export default ValentineForAnbarasi;
