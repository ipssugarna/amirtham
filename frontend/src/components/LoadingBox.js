import Spinner from 'react-bootstrap/Spinner';
import './loadingBox.css'
export default function LoadingBox() {
  return (
    <div className="d-flex justify-content-center align-items-center loader-container" style={{height:'700px',width:'700px',alignItems:'center'}}>
    <div className="loader" ></div>
  </div>
  );
}
