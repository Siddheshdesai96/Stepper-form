import React from "react";
import { useStyletron } from "baseui";
import { Input } from "baseui/input";

const WorkHistory = () => {
  const [css, theme] = useStyletron();

  return (
    <div className={css({ maxWidth: "800px", margin: "auto" })}>
      <h2
        className={css({
          paddingTop: "40px",
          position: "relative",
        })}
      >
        Tell us about your most recent Job
      </h2>

      <form
        className={css({
          backgroundColor: "#f7f7f7",
          padding: "5px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            marginBottom: theme.sizing.scale300,
          })}
        >
          <div className={css({ marginRight: theme.sizing.scale300, flex: 1 })}>
            <label
              className={css({
                marginBottom: theme.sizing.scale200,
                display: "block",
                color: theme.colors.primary,
              })}
            >
              Job Title
            </label>
            <Input
              placeholder="Job Title"
              overrides={{
                Input: {
                  style: { borderRadius: "4px", border: "1px solid #ddd" },
                },
              }}
            />
          </div>
          <div className={css({ flex: 1 })}>
            <label
              className={css({
                marginBottom: theme.sizing.scale200,
                display: "block",
                color: theme.colors.primary,
              })}
            >
              Employer
            </label>
            <Input
              placeholder="Employer"
              overrides={{
                Input: {
                  style: { borderRadius: "4px", border: "1px solid #ddd" },
                },
              }}
            />
          </div>
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            marginBottom: theme.sizing.scale300,
          })}
        >
          <div className={css({ marginRight: theme.sizing.scale300, flex: 1 })}>
            <label
              className={css({
                marginBottom: theme.sizing.scale200,
                display: "block",
                color: theme.colors.primary,
              })}
            >
              Position
            </label>
            <Input
              placeholder="Position"
              overrides={{
                Input: {
                  style: { borderRadius: "4px", border: "1px solid #ddd" },
                },
              }}
            />
          </div>
          <div className={css({ flex: 1 })}>
            <label
              className={css({
                marginBottom: theme.sizing.scale200,
                display: "block",
                color: theme.colors.primary,
              })}
            >
              Employee Id
            </label>
            <Input
              placeholder="Employee Id"
              overrides={{
                Input: {
                  style: { borderRadius: "4px", border: "1px solid #ddd" },
                },
              }}
            />
          </div>
        </div>
    
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            marginBottom: theme.sizing.scale300,
          })}
        >
          <div className={css({ marginRight: theme.sizing.scale300, flex: 1 })}>
            <label
              className={css({
                marginBottom: theme.sizing.scale200,
                display: "block",
                color: theme.colors.primary,
              })}
            >
              City
            </label>
            <Input
              placeholder="City"
              overrides={{
                Input: {
                  style: { borderRadius: "4px", border: "1px solid #ddd" },
                },
              }}
            />
          </div>
          <div className={css({ flex: 1 })}>
            <label
              className={css({
                marginBottom: theme.sizing.scale200,
                display: "block",
                color: theme.colors.primary,
              })}
            >
              Country
            </label>
            <Input
              placeholder="eg India"
              overrides={{
                Input: {
                  style: { borderRadius: "4px", border: "1px solid #ddd" },
                },
              }}
            />
          </div>
        </div>
        
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            marginBottom: theme.sizing.scale300,
          })}
        >
          <div className={css({ marginRight: theme.sizing.scale300, flex: 1 })}>
            <label
              className={css({
                marginBottom: theme.sizing.scale200,
                display: "block",
                color: theme.colors.primary,
              })}
            >
              Start Date
            </label>
            <Input
              placeholder="Start Date"
              type="date"
              overrides={{
                Input: {
                  style: { borderRadius: "4px", border: "1px solid #ddd" },
                },
              }}
            />
          </div>
          <div className={css({ flex: 1 })}>
            <label
              className={css({
                marginBottom: theme.sizing.scale200,
                display: "block",
                color: theme.colors.primary,
              })}
            >
              End Date
            </label>
            <Input
              placeholder="End Date"
              type="date"
              overrides={{
                Input: {
                  style: { borderRadius: "4px", border: "1px solid #ddd" },
                },
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkHistory;
