import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import {getSingleQuote} from "../../lib/api";
import useHttp from "../../hooks/use-http";
import {useEffect} from "react";
import LoadingSpinner from "../UI/LoadingSpinner"; // const DUMMY_QUOTES = [

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Max",
//     text: "Learning React is fun!",
//   },
//   {
//     id: "q2",
//     author: "Jeff",
//     text: "Learning React is great!",
//   },
// ];

const QuoteDetail = () => {
  const params = useParams();
  const routeMatch = useRouteMatch();
  console.log(routeMatch);

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
