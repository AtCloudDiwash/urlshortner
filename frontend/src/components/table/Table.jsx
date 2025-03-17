import {useContext} from 'react'
import "./table.css";
import {UrlContext } from './../content/Content'

const Table = () => {
  const {shortenedUrl, url} = useContext(UrlContext)
  return (
    <>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Short Link</th>
              <th>Original Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{shortenedUrl}</td>
              <td>{url}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
