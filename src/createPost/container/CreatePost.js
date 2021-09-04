import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export default function CreatePost() {
  const [value, setValue] = useState("mkdtr");

  const handlePaste = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="container">
      <MDEditor onPaste={(e) => handlePaste(e)} height={200} value={value} onChange={setValue} />
      <div style={{ padding: "50px 0 0 0" }} />
    </div>
  );
}
