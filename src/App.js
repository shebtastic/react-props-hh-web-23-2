import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("yay!");
  }

  return (
    <div>
      <Pet
        sound="Meow"
        emoji="🐈"
        description="a fluffy cat"
        onPet={handlePet}
        isHungry
      />
      {/** implizit isHungry={true} */}
      <Pet sound="Woof" emoji="🐕" description="good doggo" onPet={handlePet} />

      {/*
      Pet({
        sound: "Wau!",
        emoji: "🐕",
        description: undefined,
        onPet: () => console.log("bla!"),
      })
    */}

      <Pet sound="what does the fox say" emoji="🦊" description="quick fox" />
    </div>
  );
}

function Pet({ sound, emoji, description, onPet, isHungry = false }) {
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me!" : sound} {/** ternary -> conditional rendering */}
      {!isHungry && sound} {/** short circuit -> conditional rendering */}
      {!isHungry ? sound : undefined}
      <span role="img" aria-label={description}>
        {emoji}
      </span>
    </div>
  );
}
