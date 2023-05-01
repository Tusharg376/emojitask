import "./emoji.css"
import React, { useState } from "react";

const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const emojis = [
    { emoji: "😀", name: "grinning face" },
    { emoji: "😁", name: "grinning face with smiling eyes" },
    { emoji: "😂", name: "face with tears of joy" },
    // Add more emojis and their names here...
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
        <div className="emoji_searchbox">
            <input
                type="text"
                placeholder="Search for an emoji by name..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div>
                {filteredEmojis.map((emoji) => (
                <span key={emoji.name}>{emoji.emoji}</span>
                ))}
            </div>
        </div>
    </div>
  );
};

export default EmojiSearch;
