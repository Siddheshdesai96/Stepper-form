import React from "react";
import { useStyletron } from "baseui";
import { Input } from "baseui/input";
import { FileUploader } from "baseui/file-uploader";

interface FormFieldProps {
  label: string;
  placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder }) => {
  const [css, theme] = useStyletron();

  return (
    <div
      className={css({
        width: "48%",
        marginBottom: theme.sizing.scale300,
      })}
    >
      <label
        className={css({
          marginBottom: theme.sizing.scale200,
          display: "block",
          color: theme.colors.primary,
        })}
      >
        {label}
      </label>
      <Input
        placeholder={placeholder}
        overrides={{
          Input: {
            style: {
              borderRadius: "4px",
              border: "1px solid #ddd",
              padding: "10px",
            },
          },
        }}
      />
    </div>
  );
};

const PersonalInformation = () => {
  const [css, theme] = useStyletron();

  return (
    <div className={css({ maxWidth: "800px", margin: "auto" })}>
      <h2
        className={css({
          paddingTop: "20px",
        })}
      >
        Tell us about your Personal Information
      </h2>

      <form
        className={css({
          backgroundColor: "#f7f7f7",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <div
          className={css({
            marginBottom: theme.sizing.scale300,
            display: "flex",
            flexDirection: "column",
          })}
        >
          <label
            className={css({
              marginBottom: theme.sizing.scale200,
              display: "block",
              color: theme.colors.primary,
            })}
          >
            Upload Photo
          </label>
          <FileUploader
            accept={["image/*"]}
            maxSize={5000000}
            onDrop={(acceptedFiles, rejectedFiles) => {}}
          />
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: theme.sizing.scale300,
          })}
        >
          <FormField label="First name" placeholder="First Name" />
          <FormField label="Surname" placeholder="Surname" />
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: theme.sizing.scale300,
          })}
        >
          <FormField label="Profession" placeholder="Profession" />
          <FormField label="City" placeholder="City" />
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: theme.sizing.scale300,
          })}
        >
          <FormField label="Email" placeholder="Email" />
          <FormField label="Phone" placeholder="Phone" />
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
