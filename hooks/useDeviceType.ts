import { useEffect, useState } from 'react';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'iphone' | 'android' | 'other'>(
    'other'
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent;

      if (/iPhone/i.test(userAgent)) {
        setDeviceType('iphone');
      } else if (/android/i.test(userAgent)) {
        setDeviceType('android');
      } else {
        setDeviceType('other');
      }
    }
  }, []);

  return deviceType;
};
