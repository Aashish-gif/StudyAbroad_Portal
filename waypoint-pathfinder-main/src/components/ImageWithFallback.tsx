import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
}

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = "", 
  fallbackIcon 
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 ${className}`}>
        <div className="text-center">
          {fallbackIcon || <ImageIcon className="h-12 w-12 text-primary/50 mx-auto mb-2" />}
          <p className="text-sm text-muted-foreground">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`flex items-center justify-center bg-muted/20 ${className}`}>
          <div className="animate-pulse">
            <div className="h-8 w-8 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : 'block'}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
};

export default ImageWithFallback;