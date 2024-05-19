import React from "react";

interface IMetadataProps {
    seoTitle: string;
    seoDescription: string;
  }
  
  export default function Metadata({ seoTitle, seoDescription }: IMetadataProps): React.JSX.Element {
    return (
      <>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </>
    );
  }