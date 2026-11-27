export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <span style={{ fontSize: "4rem" }} aria-hidden="true">
        🚧
      </span>
      <h1 style={{ margin: 0 }}>Em construção</h1>
      <p style={{ margin: 0, fontSize: "1.25rem", maxWidth: "32rem" }}>
        Grandes ideias levam tempo para serem escritas. Volte logo: vale a
        espera.
      </p>
    </main>
  );
}
