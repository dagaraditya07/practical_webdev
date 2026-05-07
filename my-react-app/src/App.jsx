import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button
        onClick={toggleLike}
        style={{
          fontSize: "40px",
          border: "none",
          background: "none",
          cursor: "pointer"
        }}
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default App;