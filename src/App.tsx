import './App.css'

function App() {
  const handleClick = () => {
    const modal = document.createElement('div');
    modal.innerText = 'Here is where your code editor will go!';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '20px';
    modal.style.backgroundColor = '#fff';
    modal.style.border = '1px solid #ccc';
    modal.style.zIndex = '10001';
    document.body.appendChild(modal);
  };

  return (
    <button
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 10000,
      }}
      onClick={handleClick}
    >
      Format Code
    </button>
  );
}

export default App
