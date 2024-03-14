import { useEffect } from 'react';
import TagCloud from 'TagCloud';
import { techStackArray } from '../../Constants';

const SphereTagCloud: React.FC = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const radius = isMobile ? 150 : 250;

    const container: string = '.tagcloud';
    const options: any = {
      radius: radius,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };
    TagCloud(container, techStackArray, options);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};
export default SphereTagCloud;
