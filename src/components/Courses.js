import React from 'react';

const Courses = () => {
  const goToHome = () => {
    window.location.href = '/'; // Redirect to home
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <img src={`${process.env.PUBLIC_URL}/soon.svg`} alt="Coming Soon" style={styles.svg} />
      </div>
      <div style={styles.rightSection}>
        <h1 style={styles.heading}>Courses Coming Soon</h1>
        <p style={styles.paragraph}>
          We are working hard to bring you the best courses. Stay tuned for more updates! In the meantime, explore the SWoC website.
        </p>
        <button style={styles.button} onClick={goToHome}>Go Home</button> {/* Go Home button */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
    boxSizing: 'border-box',
  },
  leftSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    textAlign: 'left',
  },
  svg: {
    width: '100%',
    maxWidth: '550px',
    height: 'auto',
    animation: 'float 3s ease-in-out infinite',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

// Floating animation keyframes
const keyframes = `
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

// Responsive styles for mobile devices
const mediaQuery = '@media (max-width: 768px)';
styles[mediaQuery] = {
  container: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  leftSection: {
    marginBottom: '20px', 
  },
  rightSection: {
    textAlign: 'center',
  },
  svg: {
    maxWidth: '300px', 
    marginBottom: '20px', 
  },
};

export default Courses;
