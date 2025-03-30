import React from "react";
import Typewriter from "react-typewriter-effect";

const TypeAnimation = () => {
  return (
    <div>
      <Typewriter
        textStyle={{
          fontFamily: "Courier",
          fontWeight: 700,
          fontSize: "2em",
        }}
        startDelay={100}
        cursorColor="black"
        multiText={[
          "Hello, user!",
          "Welcome to your Profile Page!",
          "This are your favorite films !",
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
        deleteSpeed={50}
      />
    </div>
  );
};

export default TypeAnimation;
