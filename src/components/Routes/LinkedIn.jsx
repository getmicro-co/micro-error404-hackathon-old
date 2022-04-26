import React, {useEffect} from "react";

function Linkedin() {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com";
  }, []);
  return <div></div>;
}

export default Linkedin;
