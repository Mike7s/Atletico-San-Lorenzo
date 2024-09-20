import { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = "https://cdn.iubenda.com/iubenda.js";
    script.async = true;
    document.body.appendChild(script);

   
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div >
      
      <a
        href="https://www.iubenda.com/privacy-policy/37842036"
        className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Privacy Policy"
      >
        Privacy Policy
      </a>
    </div>
  );
};

export default PrivacyPolicy;
