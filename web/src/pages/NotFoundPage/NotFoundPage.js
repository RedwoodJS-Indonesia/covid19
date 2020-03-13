export default () => (
  <main>
    <style jsx global>{`
      html, body {
        margin: 0;
      }
      html * {
        box-sizing: border-box;
      }
      main {
        display: flex;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        text-align: center;
        background-color: #E2E8F0;
        height: 100vh;
      }
      section {
        background-color: white;
        border-radius: 0.25rem;
        width: 32rem;
        padding: 1rem;
        margin: 0 auto;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }
      h1 {
        font-size: 2rem;
        margin: 0;
        font-weight: 500;
        line-height: 1;
        color: #2D3748;
      }
      h1 span {
        font-size: 1rem;
      }
      @media (prefers-color-scheme: dark) {
        main {
          background-color: #1e1e1e;
        }
        section {
          background-color: #444;
        }
        h1 {
          color: #fff;
        }
      }
    `}</style>
    <section>
      <h1>
        🦠 COVID-19
        <br />
        <span>Page not found</span>
      </h1>
    </section>
  </main>
)
