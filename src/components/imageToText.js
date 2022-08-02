import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import './components.css'

export default function ImageToText(props) {  
  const [imageData, setImageData] = useState(null);
  const [progress, setProgress] = useState(0);
  const worker = createWorker({
    logger: (m) => {
      console.log(m);
      setProgress(parseInt(m.progress * 100));
    },
  });
  const convertImageToText = async () => {
    if (!imageData) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(imageData);
    props.settNDc(text)
  };

  useEffect(() => {
    convertImageToText();
  }, [imageData]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if(!file)return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div >
      <div>
      <div className="display-flex">
      {progress < 100 && progress > 0 && <div>
        <div className="progress-label">Progress ({progress}%)</div>
        <div className="progress-bar">
          <div className="progress" style={{width: `${progress}%`}} ></div>
        </div>
      </div>}       
       
      </div>
        <label>or upload a screen shot of Terms and Conditions</label>
        <input
          type="file"
          name=""
          id=""
          onChange={handleImageChange}
          accept="image/*"
          className="form-control form-control-sm"
        />
        <labell>Please check once after processing is completed</labell>
      </div>
     
    </div>
  );
}