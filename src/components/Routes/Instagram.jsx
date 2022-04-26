import React, {useEffect} from "react";

function Instagram() {
  useEffect(() => {
    window.location.href = "https://www.instagram.com";
  }, []);
  return <div></div>;
}

export default Instagram;
