import React from 'react';

interface ExternalLinkFrameProps {
  url: string;
}

const ExternalLinkFrame: React.FC<ExternalLinkFrameProps> = ({ url }) => {
  if (!url) return null; // Don't render the iframe if there's no URL

  return (
    <iframe
    src={url}
    style={{
      width: '100%',
      height: 'calc(100vh - 40px)', // Adjust 50px to your navigation bar's actual height
      border: 'none',
      marginTop: '40px' // Adjust 50px to your navigation bar's actual height
    }}
    title="External Content"
  />
  );
};

export default ExternalLinkFrame;
