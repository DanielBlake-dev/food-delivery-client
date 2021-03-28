import { useLocation, useRouteMatch } from "react-router-dom";

export default ({ to = "", isRelativePath = false }) => {
  const location = useLocation();
  const match = useRouteMatch();

  let pathname;

  if (match && isRelativePath) {
    pathname = match.url + to;
  } else {
    pathname = to || location.pathname;
  }

  return {
    pathname: pathname.replace(/\/\//g, "/"),
  };
};
