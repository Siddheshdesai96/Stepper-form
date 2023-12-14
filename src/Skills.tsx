import React from "react";
import { useStyletron } from "baseui";
import { Textarea } from "baseui/textarea";

const Skills: React.FC = () => {
  const [css, theme] = useStyletron();

  return (
    <div
      className={css({
        maxWidth: "900px",
        margin: "auto",
        marginTop: "20px",
      })}
    >
      {" "}
      <h2
        className={css({
          padding: "20px",
        })}
      >
        Tell us about your Skills here
      </h2>
      <form
        className={css({
          backgroundColor: "#f7f7f7",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        })}
      >
        <div className={css({ marginBottom: theme.sizing.scale400 })}>
          <Textarea
            placeholder="Enter your summary here..."
            overrides={{
              Input: { style: { borderRadius: "4px", minHeight: "300px" } },
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Skills;
